import { usePlannerActions } from '../../../hooks/usePlannerActions';
import { BUDGET_PRESETS } from '../../../lib/constants';
import { formatRupiah } from '../../../lib/format';
import StepShell, { btnBack } from '../StepShell';

export default function Step3Budget() {
  const { planner, dispatch, goToStep, targetMealCount, generateAIRecipes } = usePlannerActions();
  const avg = targetMealCount > 0 ? Math.round(planner.totalBudget / targetMealCount) : 0;

  return (
    <StepShell
      title="Konfigurasi Total Budget"
      subtitle={<>Masukkan batas maksimal anggaran makan untuk seluruh periode <strong>{planner.durationDays} hari ({targetMealCount} kali makan)</strong>.</>}
      footer={
        <>
          <button onClick={() => goToStep(2)} className={btnBack}><i className="fa-solid fa-arrow-left mr-1.5" />Kembali</button>
          <button
            onClick={() => generateAIRecipes(planner.totalBudget)}
            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition flex items-center gap-2"
          >
            <i className="fa-solid fa-wand-magic-sparkles" /><span>Generate Rekomendasi AI</span>
          </button>
        </>
      }
    >
      <div className="space-y-4">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-lg">Rp</span>
          <input
            type="number" min={10000} step={5000} value={planner.totalBudget || ''}
            onChange={(e) => dispatch({ type: 'SET_BUDGET', budget: parseInt(e.target.value, 10) || 0 })}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-none text-2xl font-extrabold text-slate-900"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {BUDGET_PRESETS.map((p) => (
            <button key={p.amount} type="button" onClick={() => dispatch({ type: 'SET_BUDGET', budget: p.amount })}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-xs font-semibold text-slate-700 transition">
              {p.label}
            </button>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm space-y-1">
          <div className="font-bold flex items-center gap-1.5">
            <i className="fa-solid fa-calculator text-amber-600" />
            <span>Rata-rata Budget per Sesi Masak: <span className="underline">{formatRupiah(avg)}</span></span>
          </div>
          <p className="text-amber-800/90 text-xs">Sistem memvalidasi harga bahan menggunakan referensi pasar Yogyakarta &amp; memperhitungkan bahan yang sudah kamu miliki.</p>
        </div>
      </div>
    </StepShell>
  );
}
