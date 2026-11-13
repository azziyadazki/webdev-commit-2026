import { Link, NavLink } from 'react-router-dom';
import { useStartPlanner } from '../../hooks/useStartPlanner';

export default function Header() {
  const startPlanner = useStartPlanner();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm shadow-emerald-600/20">
            <i className="fa-solid fa-utensils text-lg" />
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              Dapur<span className="text-emerald-600">Kos</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
              Yogyakarta Edition
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl text-sm font-semibold transition ${
                isActive ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:bg-slate-100'
              }`
            }
          >
            <i className="fa-solid fa-house mr-1.5" />
            <span className="hidden sm:inline">Beranda</span>
          </NavLink>
          <button
            onClick={startPlanner}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-600/20 transition flex items-center gap-1.5"
          >
            <i className="fa-solid fa-wand-magic-sparkles" />
            <span>AI Meal Planner</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
