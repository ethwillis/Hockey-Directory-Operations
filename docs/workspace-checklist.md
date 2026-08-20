# Workspace checklist — Hockey Ops (TanStack Start)

This file lives **in the git repo** at `docs/workspace-checklist.md` (path relative to the project root). It is not a Desktop-only copy outside the project.

Version numbers below are the **exact text printed** by the commands on this machine. They are not leftover placeholder samples.

## Project path and terminal

The terminal was used **from this project folder** (not a parent Desktop folder and not a different repo).

| Item | Value |
| --- | --- |
| Full project path | `C:\Users\egw02\Desktop\3360ap` |
| Terminal current directory (`Get-Location` / cwd) | `C:\Users\egw02\Desktop\3360ap` |
| Terminal cwd matches project folder? | Yes |
| Operating system | Windows (Windows 10 Home) |
| OS version / build | `10.0.26200` (build `26200`) |
| Platform / architecture (from Node) | `win32 x64` |
| Editor | Cursor, with this repo open |

## Node.js and npm (exact printed output)

Commands were run in PowerShell **after** `cwd` was confirmed as `C:\Users\egw02\Desktop\3360ap`.

| Command | Exact printed output |
| --- | --- |
| `node -v` | `v22.22.0` |
| `npm -v` | `10.9.4` |

| Item | Value |
| --- | --- |
| Node executable | `C:\Program Files\nodejs\node.exe` |
| npm executable | `C:\Program Files\nodejs\npm.cmd` |
| npm global prefix | `C:\Users\egw02\AppData\Roaming\npm` |
| npm registry | `https://registry.npmjs.org/` |

TanStack Start / Vite / React / TypeScript package versions are **not** listed. This folder has no app `package.json` yet, so those numbers have not been seen and are not invented.

## Sprint brief in this project

| Item | Result |
| --- | --- |
| Path | `docs/requirements-brief.md` |
| Present in this repo? | Yes (`Test-Path .\docs\requirements-brief.md` → `True`) |
| Readable in this project? | Yes (file opens in the editor; title is “Hockey Ops Player Directory — Sprint Requirements Brief”) |

## This checklist in this project

| Item | Result |
| --- | --- |
| Repo path | `docs/workspace-checklist.md` |
| Present in this repo? | Yes (`Test-Path .\docs\workspace-checklist.md` → `True`) |

## Git (measured, not guessed)

| Item | Value |
| --- | --- |
| `git --version` printed output | `git version 2.41.0.windows.1` |
| Branch | `master` |
| Remote `origin` | `https://github.com/ethwillis/Hockey-Directory-Operations.git` |

## Ready for scaffolding?

Check a box **only** if that item actually worked on this machine. Unchecked means “not confirmed.”

| Ready? | Check | Evidence |
| --- | --- | --- |
| [x] | Editor works with this project | Cursor has this repo open; `docs/requirements-brief.md` and `docs/workspace-checklist.md` are readable |
| [x] | Terminal cwd is the project folder | Printed cwd: `C:\Users\egw02\Desktop\3360ap` |
| [x] | Node works | `node -v` printed `v22.22.0` |
| [x] | npm works | `npm -v` printed `10.9.4` |

**Ready to scaffold TanStack Start from this folder:** yes — editor, terminal cwd, Node, and npm all work.

The app itself is **not** scaffolded yet. “Ready” here means the environment can run the scaffold command, not that the hockey app already exists.

## Notes (install hiccups)

**None.** `node -v` and `npm -v` ran without errors from `C:\Users\egw02\Desktop\3360ap`. No PATH, permission, or installer problem showed up while filling this checklist.

If a later install fails, start here: confirm the terminal cwd is still `C:\Users\egw02\Desktop\3360ap`, then re-run `node -v` and `npm -v` and compare to `v22.22.0` / `10.9.4`.
