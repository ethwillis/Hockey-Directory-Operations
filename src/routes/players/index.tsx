import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/players/')({
  component: Players,
})

function Players() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-slate-900">Players</h1>
      <p className="mt-2 text-slate-600">
        Seeded roster for hockey ops. Each row will open that player&apos;s
        bookmarkable page, for example /players/player-000.
      </p>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
        <li>Maya Chen · #19 · C · player-000</li>
        <li>Jordan Hale · #7 · D · player-001</li>
        <li>Sam Okonkwo · #31 · G · player-002</li>
      </ul>

      <p className="mt-4 rounded-md bg-slate-100 p-3 text-sm text-slate-700">
        Placeholder roster. The full seed of 20 players (player-000 through
        player-019) will replace this list. Jersey number or position stays on
        each row so names are not ambiguous.
      </p>

      <p className="mt-4">
        <Link to="/" className="text-slate-700 underline hover:text-slate-900">
          Back to Home
        </Link>
      </p>
    </main>
  )
}
