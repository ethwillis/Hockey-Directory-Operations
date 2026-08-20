import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-slate-900">
        Hockey Ops Player Directory
      </h1>
      <p className="mt-2 text-slate-600">
        Staff landing page for roster and schedule entry points. Open Players
        for the directory list or Games for upcoming matchups. No login.
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
        <li>
          <Link
            to="/players"
            className="text-slate-700 underline hover:text-slate-900"
          >
            Players
          </Link>
          {' — '}
          roster directory for hockey operations staff
        </li>
        <li>
          <Link
            to="/games"
            className="text-slate-700 underline hover:text-slate-900"
          >
            Games
          </Link>
          {' — '}
          upcoming and recent games, each tied to a roster player
        </li>
      </ul>
      <p className="mt-4 rounded-md bg-slate-100 p-3 text-sm text-slate-700">
        Placeholder: live directory counts will server-render in a later step.
      </p>
    </main>
  )
}
