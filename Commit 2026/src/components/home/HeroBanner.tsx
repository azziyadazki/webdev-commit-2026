import { useStartPlanner } from '../../hooks/useStartPlanner';

export default function HeroBanner() {
  const startPlanner = useStartPlanner();
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white p-6 sm:p-10 shadow-lg">
      <div className="relative z-10 max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium">
          <i className="fa-solid fa-location-dot text-amber-300" />
          <span>Referensi Harga Pasar Kranggan &amp; Demangan Jogja • Update: 13 Nov 2026</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight">
          Eat Better, Spend Smarter,<br />Live Better di Anak Kos.
        </h1>
        <p className="text-emerald-50 text-sm sm:text-base leading-relaxed">
          Bingung akhir bulan mau masak apa dengan alat seadanya? Susun jadwal makan hingga 7 hari otomatis sesuai budget, bahan sisa di kulkas, dan alat masak kosmu.
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={startPlanner}
            className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm sm:text-base shadow-md transition flex items-center gap-2"
          >
            <i className="fa-solid fa-robot" /><span>Mulai AI Meal Planner</span>
          </button>
          <a href="#resep-section" className="px-5 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm transition">
            Lihat Resep Ekonomis
          </a>
        </div>
      </div>
      <i className="fa-solid fa-bowl-rice hidden md:block absolute -right-6 -bottom-8 text-[210px] text-white/10 rotate-12 pointer-events-none" />
    </div>
  );
}
