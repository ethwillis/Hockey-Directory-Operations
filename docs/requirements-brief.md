# Hockey Ops Player Directory — Sprint Requirements Brief

**Product:** a small, bookmarkable player directory for arena staff  
**Stack (this sprint):** TanStack Start (file-based routes, server-rendered pages)  
**Data:** a **static in-repo seed** of players and games (no live APIs, no production database, no login)  
**Audience for this doc:** a coding-agent and a human reviewer who need to know *what to build*, not how to type every line of a framework app

This brief is the client story, translated into routes, first-paint content, param rules, and yes/no checks. If something is not listed here, it is not in this sprint. The skeleton must be scaffoldable from this file alone.

---

## 1. Actors and goals

| Actor | Goal | Success looks like |
| --- | --- | --- |
| Hockey operations staff (arena wifi) | **Fast first content** — open the directory and see real names immediately, not a spinner | Visit `/` or `/players` and the first HTML already contains directory copy and player names |
| Hockey operations staff / front office | **Per-player bookmarkable URLs** — share or bookmark one player so others land on the same person | A URL like `/players/player-000` can be copied, pasted, bookmarked, and opened in a new tab |
| Sprint reviewer | Confirm the skeleton is linkable, type-safe, and server-rendered | The yes/no browser checks in [§6](#6-acceptance-criteria-yesno-browser-checks) all pass |

There is **no login**. Anyone who can open the app URL is treated as trusted arena staff. A production database is **not** required.

---

## 2. Route map (sprint minimum)

These four URLs are the **sprint minimum**. Each row is the one-line purpose for that route.

| Route | Purpose |
| --- | --- |
| `/` | Home hub: first-paint intro for hockey ops and links to Players and Games. |
| `/players` | Seeded roster list; each row links to that player’s detail URL. |
| `/players/$playerId` | Bookmarkable/shareable player detail for path param **`playerId`**. |
| `/games` | Seeded games list; each game includes a roster **`playerId`**. |

Do not add extra URL shapes such as `/roster`, `/schedule`, `/players/:id/stats`, or `/games/$gameId`.

**Dynamic segment:** `$playerId` is the path parameter. Player detail **must be bookmarkable and shareable** as a full path (for example `/players/player-000`), not a hash route and not `?id=`.

IDs use the exact pattern **`player-000`** (lowercase `player-` plus three digits): `/players/player-000` … `/players/player-019`.

### Additional in-scope page (not part of the sprint-minimum map)

| Route | Purpose |
| --- | --- |
| `/about` | Short static “what this directory is” page for staff context. |

### Navigation that must exist

- Home links to **Players** and **Games** (and **About**).
- Every name on `/players` links to `/players/$playerId` (for example `/players/player-000`).
- Player detail has a way back to `/players` (and preferably Home).
- Games has a way back to Home. Each game’s linked player goes to `/players/$playerId`.
- About has a way back to Home.
- A simple shared header or footer with those links is expected.

---

## 3. First paint / server-rendered expectations (per page)

**First paint** means the **first HTML the browser receives from the server** already contains the main content for that route. Seed data in the repo is allowed and expected. “Should be fast” is not enough—the HTML itself must already be filled.

Staff on slow arena wifi should not stare at a spinner, a blank card, or “Loading…” as the only first screen. Client-side fetch of a remote API is out of scope.

**Minimum seed count is 20 players** (`player-000` through `player-019`). Invented hockey names are fine. No database login is needed to render these pages.

### `/` Home

Already in the first HTML:

- App title (for example “Hockey Ops Player Directory”)
- One-sentence purpose (who this is for)
- Working links to `/players` and `/games` (and `/about`)
- Optional: 2–3 featured player names from the seed, each linking to detail

### `/players` Players list

Already in the first HTML:

- Page heading (for example “Players”)
- **20** real player names from the seed (`player-000` … `player-019`)
- Each row/card links to `/players/$playerId`
- Jersey number **or** position so names are not ambiguous
- If `?q=` is applied, the first HTML still shows the **complete filtered list**, not a placeholder that fills in later

### `/players/$playerId` Player detail (bookmarkable)

Already in the first HTML:

- Player **display name**, **jersey number**, **position**, and a short **bio**
- A link back to `/players`

If `$playerId` is not a known roster id (for example `/players/player-999`):

- **HTTP status is 200** (not 404, not 500)
- The first HTML is an in-app “Player not found” page plus a link back to `/players`

### `/games` Games

Already in the first HTML:

- Page heading (for example “Games”)
- At least **4** static games
- Each game shows **opponent** (or home/away), **date**, **status** (`upcoming` or `final`), and the linked **`playerId`** (name and/or id, linking to `/players/$playerId`)
- If `?status=` is applied, the first HTML shows the filtered list, not a placeholder

### `/about` About (additional page)

Already in the first HTML: heading, a short paragraph that this is the Hockey Ops directory for arena staff, and a link back to `/`.

---

## 4. Type-safe path and search params

TanStack Start/Router should **declare and validate** params (Zod, Valibot, or the router’s built-in validators—pick one and use it consistently).

### Path params

| Route | Param | Rule |
| --- | --- | --- |
| `/players/$playerId` | **`playerId`** | Required. Form `player-` plus **three digits** (for example `player-000`). Pattern may be validated as `^player-\d{3}$`. If the id matches the pattern but is **not** on the 20-player roster, render the not-found UI with **HTTP 200**. Empty or whitespace-only ids are not a valid player. |
| `/`, `/players`, `/games`, `/about` | *(none)* | No path params. |

`playerId` is the **only** dynamic path segment. There is no `/games/$playerId` route; a game’s player lives on the **game record**.

### Search params

If a param is missing or invalid, use the default—do not crash. Do not invent extra query keys (`sort`, `page`, `teamId`, etc.).

| Route | Search param | Meaning | Allowed values | Default if missing/invalid |
| --- | --- | --- | --- | --- |
| `/players` | `q` | Filter by player **name** (case-insensitive contains) | Any string; empty = no filter | Full roster |
| `/games` | `status` | Filter by game status | `upcoming`, `final`, or `all` | `all` |
| `/`, `/about`, `/players/$playerId` | *(none)* | No search params to honor | Extra keys may be ignored | — |

Examples: `/players/player-000` shows that player; `/players/player-999` shows not-found UI with HTTP **200**; `/games?status=nope` behaves as `all`.

---

## 5. Out of scope

Parked so agent prompts stay bounded. Do **not** build:

- **Auth** — login, roles, permissions, staff-vs-public views, API keys
- **Live external feeds** — NHL/team APIs, scraping, runtime network calls for roster/games
- **Edit workflows** — create, update, or delete players or games
- Production database, ORM, or hosted login as a prerequisite for the skeleton
- Stats dashboards, shot maps, video, injury reports, real-time scores
- Pagination, infinite scroll, extra routes beyond §2
- Native apps, analytics, ads, design-system polish

**This sprint can scaffold without those.** Static seed data in the repo is enough. Nothing below may block first paint.

---

## 6. Acceptance criteria (yes/no browser checks)

Each check is **visit a URL → see X**. This sprint passes only if every row is **yes**. No vague “feels fast” or “looks good” items.

### First paint (server-rendered HTML)

| # | Check | Yes / No |
| --- | --- | --- |
| 1 | Visit `/`. Before interacting, you can read the app title and links to Players and Games (not only a spinner). | |
| 2 | Visit `/players` and view page source (or disable JS). The HTML already contains **real player names**—at least **20** when `q` is absent. | |
| 3 | Visit `/players/player-000` and view page source. The HTML already contains that player’s **name**, **number**, and **position**. | |
| 4 | Visit `/games` and view page source. The HTML already contains **opponent** (or home/away), **date**, and a **player id or name** for at least one game. | |

### Bookmarkable player URLs

| # | Check | Yes / No |
| --- | --- | --- |
| 5 | From `/players`, click a player. The address bar is `/players/player-NNN` (for example `/players/player-000`), not `/#/players/…` and not `/players?id=`. | |
| 6 | Copy that URL, open a **new** tab, paste, and go. You land on the **same** player with content already on the page. | |
| 7 | Bookmark that URL, close the tab, open the bookmark. The same player detail appears. | |
| 8 | Visit `/players/player-999`. You see “Player not found” (or equivalent) and a link to `/players`. | |
| 9 | In DevTools → Network, that unknown-player request is **HTTP 200**, not 404. | |

### Sprint-minimum routes and navigation

| # | Check | Yes / No |
| --- | --- | --- |
| 10 | Visit `/`, `/players`, `/players/player-000`, and `/games`. Each page renders (none of these four is a missing route). | |
| 11 | Home → Players → a player → back to Players using on-page links. | |
| 12 | Home → Games and Games → Home using on-page links. | |
| 13 | Completing these checks does **not** require a login page, settings page, or database. | |

### Params (observable in the browser)

| # | Check | Yes / No |
| --- | --- | --- |
| 14 | Visit `/players?q=` plus part of a known last name. The list is **shorter** and still includes that player. A nonsense `q` may be empty but still shows a heading. | |
| 15 | Visit `/games?status=upcoming` (only upcoming) and `/games?status=final` (only completed). | |
| 16 | Visit `/games?status=garbage`. The games page still shows (full list / default), not an error screen. | |
| 17 | Visit `/players` with no query. You see all **20** seed players. | |
| 18 | On `/games`, a game links to `/players/player-NNN`. Opening it shows that player. | |

### Additional `/about` page

| # | Check | Yes / No |
| --- | --- | --- |
| 19 | Visit `/about`. First HTML has an About heading and a short paragraph. Home ↔ About links work. | |

### Scope discipline

| # | Check | Yes / No |
| --- | --- | --- |
| 20 | Using the app never asks for a username, password, or API key. | |
| 21 | Roster and games content does **not** call an external sports API at runtime. | |

---

## 7. Static data contract (seed only — no database)

Ship an in-repo seed. Field **names** may vary slightly; **id format must not**.

**Players** (minimum seed count: **20**):

- `id` — `player-000`, `player-001`, … `player-019`
- `name`, `number`, `position`, `bio`

**Games** (minimum 4; each game **must** include a player id):

- `id` — data only (no `/games/$gameId` route this sprint)
- `playerId` — required; one of `player-000` … `player-019`; shown on `/games` and linked to `/players/{playerId}`
- `opponent`, `date`, `status` (`upcoming` or `final`)
- optional: `venue`, `time`, `score`

---

## 8. Handoff notes (this sprint vs next)

**This sprint delivers:** a running TanStack Start skeleton whose **sprint-minimum route map** is `/`, `/players`, `/players/$playerId`, and `/games`, plus `/about`. Seed of **20** players (`player-000` … `player-019`), games each with a `playerId`, validated params, unknown players as in-app HTML with **HTTP 200**, and **server-rendered first paint**. Staff get fast first content and bookmarkable per-player URLs.

**Not claimed:** live data, auth, edit workflows, or a production database.

**Next sprint (suggested):** load the same URLs from a real data source; add `/games/$gameId` without breaking `player-000` bookmarks.

---

## 9. Constraints for the coding-agent

1. Implement the **sprint-minimum route map** in §2 (`/`, `/players`, `/players/$playerId`, `/games`) and the additional `/about` page.
2. Server-render so first paint is real seed content (not a spinner-only shell).
3. Path param is named **`playerId`**. Unknown ids → not-found UI with **HTTP 200**.
4. Seed **20** players `player-000` … `player-019`. Every game has a `playerId` from that set.
5. Static in-repo data only. **No auth, no live feeds, no edit workflows, no production database.**
6. Reviewer can complete §6 by visiting URLs in a browser—no accounts or keys.
