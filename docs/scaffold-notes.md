# Scaffold notes — Hockey Ops (TanStack Start)

This folder was scaffolded with the **official TanStack CLI** (not a hand-rolled layout):

```text
npx @tanstack/cli@latest create 3360ap --target-dir . --package-manager npm --framework React --no-git --no-examples -y --force
```

- **Stack:** React, TypeScript, Vite, Tailwind CSS, TanStack Start (file-based TanStack Router).
- **Out of scope for this step (not invented):** no Supabase, no auth, no player seed, no `/players` or `/games` UI. Those come later from `docs/requirements-brief.md`.
- **Docs kept:** `docs/requirements-brief.md` and `docs/workspace-checklist.md`.

## What was generated

| File | Role |
| --- | --- |
| `package.json` | App root. `dev` script is `vite dev --port 3000`. Lists `react`, `react-dom`, `@tanstack/react-start`, `@tanstack/react-router`, `vite`, `typescript`, `@types/react`, `@vitejs/plugin-react`, `tailwindcss` |
| `package-lock.json` + `node_modules/` | Install completed during scaffolding; `node_modules` is present |
| `vite.config.ts` | Vite plugins: TanStack Start, React, Tailwind, devtools |
| `tsconfig.json` | TypeScript strict / bundler mode, JSX, path aliases |
| `tailwind.config.ts` | Real config: `content`, `theme.extend`, `plugins` (not an empty placeholder) |
| `src/styles.css` | `@import "tailwindcss"` and `@config "../tailwind.config.ts"` |
| `src/routes/__root.tsx` | Root HTML shell |
| `src/routes/index.tsx` | Starter home page `/` only |
| `src/router.tsx` | Router factory |
| `src/routeTree.gen.ts` | Generated route tree — do not edit by hand |

## How the dev server was verified

From `C:\Users\egw02\Desktop\3360ap`:

```powershell
npm run dev
```

Printed output included:

```text
VITE v8.2.1  ready in 2473 ms

  ➜  Local:   http://localhost:3000/
```

A request to **http://localhost:3000/** then returned:

| Check | Result |
| --- | --- |
| HTTP status | `200` |
| Page title | `TanStack Start Starter` |
| Visible starter copy | `Welcome to TanStack Start` |
| Hint on the page | `Edit src/routes/index.tsx to get started.` |
| Server after the request | Still running (did not crash) |

That is the starter page, not a blank error page or a connection-failed screen.

If you already stopped the server, start it again with `npm run dev` and open **http://localhost:3000/**.

## Where source files live (later routing work)

All pages go under **`src/routes/`**. TanStack Start’s file-based router maps files to URLs.

| File to add later | URL |
| --- | --- |
| `src/routes/index.tsx` | `/` (already exists — starter welcome only) |
| `src/routes/players.tsx` | `/players` |
| `src/routes/players.$playerId.tsx` | `/players/$playerId` |
| `src/routes/games.tsx` | `/games` |
| `src/routes/about.tsx` | `/about` |
| `src/routes/__root.tsx` | Shared layout (header/footer later) |

```text
3360ap/
├── docs/                      ← course docs (not app routes)
├── src/
│   ├── routes/                ← put new pages here
│   │   ├── __root.tsx
│   │   └── index.tsx
│   ├── router.tsx
│   ├── routeTree.gen.ts       ← generated
│   └── styles.css
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.ts
```

Do **not** add those hockey routes until the next step.

## Later notes

Use this section when something goes wrong on a future install, or when hockey routes are added.

- Closing the browser tab while a request is in flight once printed `Error: aborted` / `ECONNRESET` in the terminal. Re-run `npm run dev` if the process exited; `/` still served HTTP 200 with starter HTML when the server was running.
-
-
