# Route map — sprint minimum

**Framework (this sprint):** TanStack Start (file-based routes, server-rendered pages).  
**Product:** a small, bookmarkable player directory for arena staff.

## Why this map exists

The requirements brief is the client story, translated into routes, first-paint content, param rules, and yes/no checks. This file is that **sprint-minimum route map**: the four URLs the skeleton must be able to serve, which source file owns each URL, and how `__root` wraps them.

If a URL is not listed here, it is not in this map. Do not add extra URL shapes such as `/roster`, `/schedule`, `/players/:id/stats`, or `/games/$gameId`. There is **no login**. Do not add auth or Supabase in this step.

## Sprint-minimum routes (path → purpose → file)

These four URLs are the **sprint minimum**. Each row is the one-line purpose from the brief, plus the **planned file path**. The three non-home files are not created yet.

| Path (URL) | Purpose (from the brief) | Planned file path |
| --- | --- | --- |
| `/` | Home hub: first-paint intro for hockey ops and links to Players and Games. | `src/routes/index.tsx` |
| `/players` | Seeded roster list; each row links to that player’s detail URL. | `src/routes/players.tsx` |
| `/players/$playerId` | Bookmarkable/shareable player detail for path param **`playerId`**. | `src/routes/players.$playerId.tsx` |
| `/games` | Seeded games list; each game includes a roster **`playerId`**. | `src/routes/games.tsx` |

Shared chrome for every page lives in `src/routes/__root.tsx` (not a URL of its own). That file is the layout parent; it does not appear as a fifth path in the table.

## Path segments (plain language)

A URL is a chain of **segments** split by `/`. This scaffold treats some segments as fixed words and one segment as a placeholder.

**Static segments** never change. `players` and `games` are ordinary folder names in the address bar:

- `/players` — the word `players` is static. Every visit to the roster list uses that same path.
- `/games` — the word `games` is static. There is no `/games/$gameId` route this sprint; a game’s player lives on the **game record**.

**Dynamic segments** are the changing part of a path. `$playerId` is the path parameter named **`playerId`**. Player detail is **dynamic and bookmarkable**: a specific id lives in the URL (for example `/players/player-000`), not only an in-page click, not a hash route, and not `?id=`.

- In the filename `players.$playerId.tsx`, the `$` means “this piece of the URL is a param.”
- IDs use the exact pattern **`player-000`** (lowercase `player-` plus three digits): `/players/player-000` … `/players/player-019`.
- `/players` is static; `/players/player-000` is static `players` plus dynamic `playerId=player-000`.
- `playerId` is the **only** dynamic path segment. There is no `/games/$playerId` route.

**Index route** is the file named `index.tsx`. It is the home hub at **`/`** — no extra word after the site root. Opening the app with no path still matches `src/routes/index.tsx`. It is a real route in the table above, not a layout.

Staff can copy `/players/player-000`, paste it in a new tab, or bookmark it, and land on the same person.

## Generated route tree

**File name:** `src/routeTree.gen.ts`

**Role:** TanStack Router reads `src/routes/` and writes this file so the app has a typed tree of parents, children, and paths. `src/router.tsx` imports `routeTree` from here. After route files change, refresh it with `npm run generate-routes` (`tsr generate`).

**Rule:** Do not edit `src/routeTree.gen.ts` by hand. It is overwritten on generate. Fix a route by changing a file under `src/routes/`, then run generate again. Never repair IDs, parents, or imports in the generated file.

Today the folder only has `__root.tsx` and `index.tsx`, so the generated tree only lists `__root__` and `/`. `/players`, `/players/$playerId`, and `/games` appear here after those route files exist and generate is run again.

## Layout + child relationship (target)

**Target:** `__root` is the layout parent; each sprint-minimum path is a child that renders in its `<Outlet />`.

| Parent (layout) | Child (URL) | How they connect |
| --- | --- | --- |
| `src/routes/__root.tsx` | `src/routes/index.tsx` → `/` | Child of root. Renders inside root’s `<Outlet />`. |
| `src/routes/__root.tsx` | `src/routes/players.tsx` → `/players` | Child of root (later step). Same Outlet. |
| `src/routes/__root.tsx` | `src/routes/players.$playerId.tsx` → `/players/$playerId` | Child of root (later step). Same Outlet. Bookmarkable `playerId`. |
| `src/routes/__root.tsx` | `src/routes/games.tsx` → `/games` | Child of root (later step). Same Outlet. |

`__root` is not a URL. It supplies the document shell (`createRootRoute`, `head`, `shellComponent`) and the shared “Hockey Ops Directory” header. The matched child is the page. Root does not hold player data tables.

When generate has run, `routeTree.gen.ts` records this as `getParentRoute: () => rootRouteImport` on each child. That is the machine-readable version of the table above.

## Acceptance hooks from the brief

Each check is **visit a URL → see X**. These hooks are copied from the brief so this map stays tied to review. They are **not done now**. Static page bodies, param validation, and SSR data are a **later step**; the hooks below are what those later pages must satisfy.

### First paint (server-rendered HTML)

| # | Check |
| --- | --- |
| 1 | Visit `/`. Before interacting, you can read the app title and links to Players and Games (not only a spinner). |
| 2 | Visit `/players` and view page source (or disable JS). The HTML already contains **real player names**—at least **20** when `q` is absent. |
| 3 | Visit `/players/player-000` and view page source. The HTML already contains that player’s **name**, **number**, and **position**. |
| 4 | Visit `/games` and view page source. The HTML already contains **opponent** (or home/away), **date**, and a **player id or name** for at least one game. |

### Bookmarkable player URLs

| # | Check |
| --- | --- |
| 5 | From `/players`, click a player. The address bar is `/players/player-NNN` (for example `/players/player-000`), not `/#/players/…` and not `/players?id=`. |
| 6 | Copy that URL, open a **new** tab, paste, and go. You land on the **same** player with content already on the page. |
| 7 | Bookmark that URL, close the tab, open the bookmark. The same player detail appears. |
| 8 | Visit `/players/player-999`. You see “Player not found” (or equivalent) and a link to `/players`. |
| 9 | In DevTools → Network, that unknown-player request is **HTTP 200**, not 404. |

### Sprint-minimum routes and navigation

| # | Check |
| --- | --- |
| 10 | Visit `/`, `/players`, `/players/player-000`, and `/games`. Each page renders (none of these four is a missing route). |
| 11 | Home → Players → a player → back to Players using on-page links. |
| 12 | Home → Games and Games → Home using on-page links. |
| 13 | Completing these checks does **not** require a login page, settings page, or database. |

### Params (observable in the browser)

| # | Check |
| --- | --- |
| 14 | Visit `/players?q=` plus part of a known last name. The list is **shorter** and still includes that player. A nonsense `q` may be empty but still shows a heading. |
| 15 | Visit `/games?status=upcoming` (only upcoming) and `/games?status=final` (only completed). |
| 16 | Visit `/games?status=garbage`. The games page still shows (full list / default), not an error screen. |
| 17 | Visit `/players` with no query. You see all **20** seed players. |
| 18 | On `/games`, a game links to `/players/player-NNN`. Opening it shows that player. |

### Scope discipline

| # | Check |
| --- | --- |
| 20 | Using the app never asks for a username, password, or API key. |
| 21 | Roster and games content does **not** call an external sports API at runtime. |

Check **19** (`/about`) is an additional in-scope page in the brief. It is **not** part of this sprint-minimum map and is not listed as a path above.

## Later step (do not build the full page UI yet)

These four paths are the **sprint-minimum route map**. This step only names them and wires a shared layout. This map does **not** claim static page bodies, param validation, or SSR data are done now.

- **Later step (static page bodies):** do not build the full page UI yet — first-paint home copy, the `/players` roster list, player detail fields, or the `/games` list.
- **Later step (param validation):** do not validate `playerId` (`^player-\d{3}$`), `/players` search param `q`, or `/games` search param `status` yet.
- **Later step (SSR data):** do not load the static in-repo seed (20 players, games with a `playerId`) into route loaders yet. No live APIs, no production database, no login.
- **Later step:** `/players` seeded roster of **20** players (`player-000` … `player-019`), jersey number or position, and each row linking to `/players/$playerId`.
- **Later step:** `/players/$playerId` display name, jersey number, position, and a short bio in the first HTML; unknown ids (for example `/players/player-999`) as in-app “Player not found” with **HTTP 200**.
- **Later step:** `/games` at least **4** static games with opponent (or home/away), date, status (`upcoming` or `final`), and the linked **`playerId`**.
