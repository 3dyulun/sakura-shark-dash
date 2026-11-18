# Sakura Shark Dash 🌸🦈

[![Make the best game](https://make.fun/badge/best-game-01.svg)](https://make.fun/bounty/best-game-01)
[![Rank](https://make.fun/badge/best-game-01/3dyulun/sakura-shark-dash/rank.svg)](https://make.fun/bounty/best-game-01)
[![Reward](https://make.fun/badge/best-game-01/3dyulun/sakura-shark-dash/reward.svg)](https://make.fun/bounty/best-game-01)

A 75-second arcade catcher for make.fun **"Make the best game"** ($1,000, closes 2026-11-19 02:00 HKT).

You are a shark in a blue sakura kimono with a gold belt, swimming under a
falling sky of cherry-blossom petals. Catch petals (+10), sushi (+25) and
golden koi (+50), chain catches for combo multipliers, dodge the ink bombs
(−1 life), and grab the lucky bell dropped by the tuxedo-cat girl (+100 and
+1 life). 3 lives, levels speed up every 200 points.

## Play

Open `game/index.html` in any browser — double-click it, or serve it:

```
python3 -m http.server --directory game
```

- **Move:** ← → / A / D, mouse, or touch
- **Start / restart:** click, Space, or R on the game-over screen
- **Pause:** P · **Mute:** M

## Why this game

- **Instantly readable:** one verb (catch), one threat (ink), one bonus (bell).
- **Built for the judge's 30 seconds:** title screen explains everything,
  first petal lands within a second, combo text rewards chaining at once.
- **Terance's mascots, drawn in code:** the shark (blue sakura kimono, gold
  belt, open smile) and the tuxedo cat girl (black head, white forehead
  stripe, pink kimono) are the two locked mascot designs — no external art.
- **Fully offline:** single HTML file, canvas-drawn art, WebAudio bleeps.
  No CDN, no images, no network — the `game/` folder runs from disk.

## Files

| File | What it is |
| --- | --- |
| `main.ts` | Entry point: verifies the deliverable and prints play/submit steps |
| `game/index.html` | The whole game (431 lines, self-contained) |
| `LICENSE` | MIT |
| `TRANSCRIPT.md` | Coding-session transcript for the submission |

## Verify

```
npx tsx main.ts
```

Checks the game file is present, self-contained, and has all required
states and controls. The game was smoke-tested in Node with a stubbed DOM:
title → 20 s of play → game over, no runtime errors (2026-11-18).

## Submit

Public repo under the **3dyulun** GitHub account (created after the
competition started), MIT licence, this `main.ts` at root, `game/` with the
offline `index.html`, 3–4 real screenshots, and the session transcript.
