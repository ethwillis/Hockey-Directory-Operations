import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-slate-900">
        Hockey Ops Player Directory
      </h1>
      <p className="mt-2 text-slate-600">
        A bookmarkable directory for arena staff. Open a player or game on slow
        wifi and share the URL — no login required.
      </p>

      <h2 className="mt-6 text-lg font-semibold text-slate-900">Jump to</h2>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
        <li>
          <Link to="/players" className="text-slate-700 underline hover:text-slate-900">
            Players
          </Link>
          {' — '}
          roster list; each name will link to a bookmarkable player page
        </li>
        <li>
          <Link to="/games" className="text-slate-700 underline hover:text-slate-900">
            Games
          </Link>
          {' — '}
          upcoming and final games, each tied to a roster player
        </li>
      </ul>

      <h2 className="mt-6 text-lg font-semibold text-slate-900">
        Featured players
      </h2>
      <p className="mt-4 rounded-md bg-slate-100 p-3 text-sm text-slate-700">
        Placeholder names until the seed roster is loaded.
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
        <li>Maya Chen · #19 · C</li>
        <li>Jordan Hale · #7 · D</li>
        <li>Sam Okonkwo · #31 · G</li>
      </ul>
    </main>
  )
}
