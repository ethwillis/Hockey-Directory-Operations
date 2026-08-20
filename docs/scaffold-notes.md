# Scaffold notes — hockey ops player directory

## What we generated
- TanStack Start app with React, TypeScript, Vite, and Tailwind CSS (`package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `src/styles.css`)
- Starter stubs: `src/router.tsx`, `src/routes/__root.tsx`, `src/routes/index.tsx`
- No player/games product features yet (routes come next)

## Key files
- package.json — dependencies and scripts (`dev`, `build`)
- vite.config.ts — Vite + Start + Tailwind plugins
- tsconfig.json — TypeScript compiler options
- tailwind.config.ts — content paths for class scanning
- src/styles.css — global styles; imports Tailwind

## How I verified
1. Ran `npm install` (the TanStack CLI already installed deps; re-ran after aligning configs).
2. Ran `npm run dev` from the project root (`C:\Users\egw02\Desktop\3360ap`).
3. Opened the printed local URL (http://localhost:3000).
4. Confirmed the default page rendered without a terminal crash (HTTP 200, heading “Welcome to TanStack Start”).

## Layout notes for later steps
- Application source lives under `src/`.
- Routes will be added under `src/routes/` in the next steps.
- Requirements live in `docs/requirements-brief.md`.

## Issues hit
- Official CLI named the package `3360ap` and used `preview` instead of `start`; renamed to `hockey-ops-player-directory` and added a `start` script (`vite preview`) to match the expected scaffold shape.
- Current TanStack Start uses Vite 8 (not Vite 6 from older examples). Left Vite 8 so `npm run dev` still runs.
- Tailwind v4 uses `@import 'tailwindcss'` in CSS; `tailwind.config.ts` is still present for content paths.
- Closing a browser tab mid-request once printed `Error: aborted` / `ECONNRESET`. Re-run `npm run dev` if the process exits.
