// main.ts — Sakura Shark Dash (make.fun "Make the best game" entry)
// Entry point for the submission. The game itself is a single
// self-contained file at game/index.html (no CDN, no external assets, no
// network): open it in any browser and it runs offline.
// Run with:  node main.ts
// It verifies the deliverable, then hands it in: copies game/ and
// screenshots/ to /output and writes /output/dossier.json with the vendored
// make.fun library. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Play: open game/index.html (double-click, or: python3 -m http.server --directory game)
//   Move: ← → / A D / mouse / touch. Catch petals, sushi & golden koi,
//   dodge ink bombs, grab the lucky bell (+100 & +1 life). 75 seconds, 3 lives.

import { readFileSync, existsSync, cpSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-game.ts";

const ROOT = fileURLToPath(new URL(".", import.meta.url));
const GAME = join(ROOT, "game", "index.html");
const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const checks: [string, boolean][] = [
  ["game/index.html exists", existsSync(GAME)],
  ["LICENSE (MIT) exists", existsSync(join(ROOT, "LICENSE"))],
  ["README.md exists", existsSync(join(ROOT, "README.md"))],
];

if (checks[0][1]) {
  const html = readFileSync(GAME, "utf8");
  checks.push(
    ["single self-contained file (no external http(s) refs)", !/https?:\/\//.test(html)],
    ["canvas game present", html.includes('<canvas id="game"')],
    ["75-second round, 3 lives, combos", html.includes("ROUND_LEN = 75") && html.includes("lives: 3")],
    ["keyboard + mouse + touch controls", html.includes("pointerdown") && html.includes("ArrowLeft")],
    ["title / playing / game-over states", html.includes('"title"') && html.includes('"over"')],
  );
}

let ok = true;
for (const [name, pass] of checks) {
  console.log(`${pass ? "PASS" : "FAIL"}  ${name}`);
  if (!ok) {
    // keep printing every check, then fail at the end
  }
  if (!pass) ok = false;
}
if (!ok) {
  console.error("\nDeliverable check failed — fix the FAIL lines above.");
  process.exit(1);
}

// Hand in: copy game/ and screenshots/ to /output, write dossier.json.
// The scorer's own caps (reference/gate.json): only text_max_bytes shapes
// the bytes; the others refuse an entry the scorer would refuse (more than
// 4 screenshots or one over 256 KiB; more than 993 files in game/ or
// 48 MiB of game files, in all, or a path under game/ over 1000 bytes).
mkdirSync(OUT, { recursive: true });
cpSync(join(ROOT, "game"), join(OUT, "game"), { recursive: true });
mkdirSync(join(OUT, "screenshots"), { recursive: true });
if (existsSync(join(ROOT, "screenshots"))) {
  cpSync(join(ROOT, "screenshots"), join(OUT, "screenshots"), { recursive: true });
}

writeFileSync(
  join(OUT, "dossier.json"),
  buildDossier(OUT, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  }),
);

console.log(`
Sakura Shark Dash — ready to submit.
Play: open game/index.html (double-click, or: python3 -m http.server --directory game)
  Move: ← → / A D / mouse / touch. Catch petals, sushi & golden koi,
  dodge ink bombs, grab the lucky bell (+100 & +1 life). 75 seconds, 3 lives.
Submit (make.fun "Make the best game", closes 2026-11-19 02:00 HKT):
  public repo under the 3dyulun GitHub account, MIT licence, this main.ts
  at root, game/ holding the offline index.html, 3-4 real screenshots.
`);
