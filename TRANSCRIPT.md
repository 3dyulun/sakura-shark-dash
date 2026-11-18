# Coding session transcript — Sakura Shark Dash

Built by Muse (Meta AI agent) for Terance Yu, for the make.fun
"Make the best game" bounty ($1,000, closes 2026-11-19 02:00 HKT).
Session: 2026-11-18 ~07:00 HKT, in `~/workspace/makefun/best-game/`.

Terance handed the make.fun bounties to Muse on 2026-11-17 ("交俾你玩"),
chose Muse's own Solana keypair for entry, and said to start with the
simple, easy bounties first, using his 3dyulun GitHub account.
The two small ai-judge bounties ($50 relax, $100 rich) were blocked:
SIWS sign-in could not finish from the VM and the wallet was empty, so
both needed entry fees ($0.50 / $1 USDC + SOL gas). The $1,000 game bounty
is free to enter, so it became the simple-first pick; the $1,666 GTA 6
bounty (opens 2026-11-17 23:00, closes 2026-11-24 23:00) needs a whole
drivable city with traffic, police, missions and combat, so it was left
for later.

## What was built, in order

1. **Concept** — one-verb arcade catcher, 75-second rounds, built around
   Terance's two locked mascots: the shark in a blue sakura kimono with a
   gold belt, and the tuxedo cat girl in a pink kimono. Canvas-drawn, no
   external art, so the game stays fully offline as the bounty requires.
2. **`game/index.html`** — the whole game in one self-contained file:
   title / playing / paused / game-over states; shark movement by
   keyboard (arrows / A D), mouse and touch; falling petals, sushi,
   golden koi and ink bombs with sway; combo multiplier every 5 chained
   catches; level-up every 200 points (faster spawns); lucky-bell bonus
   (+100, +1 life, max 3); 3 lives; particles, screen shake, score
   popups; WebAudio sound effects, no audio files; drifting-petal
   background and HUD (score, best, combo, timer, level, lives).
3. **Bug found and fixed during the build** — the first draft placed the
   game-flow functions after the main loop, leaving `startGame`'s body
   orphaned and the script unparseable. Reordered so `startGame` /
   `gameOver` / `levelUpCheck` / `update` come before the loop, and the
   pause overlay is drawn every frame instead of once.
4. **Verification** — `node --check` on the extracted script passes; a
   stubbed-DOM smoke test in Node ran title → 20 s of play → game over
   (75 s simulated) with no runtime errors; confirmed zero external
   `http(s)` references in the HTML.
5. **`main.ts`** — root entry point that verifies the deliverable
   (files present, self-contained, controls and states present) and
   prints play/submit steps.
6. **`README.md`, `LICENSE` (MIT), this transcript.**

## Still to do before submitting

- Create the public repo under the **3dyulun** GitHub account (Muse has
  no GitHub login in this VM — Terance's access is needed).
- Push these files, MIT licence at root.
- Take 3–4 real screenshots of the game running (title, mid-play,
  combo/bell moment, game over).
- Sign in to make.fun (SIWS with Muse's keypair,
  wallet `HLZ7bUyMeNMg2aJP9CxBZX8YgkWqtQv6qHhEfDyixhGw`) and submit
  the repo link + transcript. The curl-based `signin.mjs` in
  `~/workspace/makefun/` already works around the VM's POST hang.
