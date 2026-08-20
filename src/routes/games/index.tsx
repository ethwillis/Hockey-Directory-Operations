import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/games/')({
  component: Games,
})

function Games() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-slate-900">Games</h1>
      <p className="mt-2 text-slate-600">
        Seeded games for hockey ops. Each game includes a roster player id —
        there is no separate /games/$gameId page this sprint.
      </p>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
        <li>vs. River City · 2026-09-12 · upcoming · player-000</li>
        <li>vs. North Bay · 2026-09-05 · final · player-001</li>
        <li>at Lakeside · 2026-08-28 · final · player-002</li>
        <li>vs. Harbor · 2026-10-03 · upcoming · player-000</li>
      </ul>

      <p className="mt-4 rounded-md bg-slate-100 p-3 text-sm text-slate-700">
        Placeholder schedule. Seeded games will replace this list. Each row
        will keep opponent (or home/away), date, status (upcoming or final),
        and a linked playerId.
      </p>

      <p className="mt-4">
        <Link to="/" className="text-slate-700 underline hover:text-slate-900">
          Back to Home
        </Link>
      </p>
    </main>
  )
}
