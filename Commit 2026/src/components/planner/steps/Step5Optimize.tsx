import { useMemo, useState } from 'react';
import { useToast } from '../../../context/ToastContext';
import { usePlannerActions } from '../../../hooks/usePlannerActions';
import { formatRupiah } from '../../../lib/format';
import { evaluateMealPlanFinancials } from '../../../lib/mealPlanFinancials';
import { calculateRecipeMetrics } from '../../../lib/recipeMetrics';
import { btnNext } from '../StepShell';

export default function Step5Optimize() {
  const { planner, dispatch, goToStep, swapWithCheaper, autoOptimize } = usePlannerActions();
  const { showToast } = useToast();
  const [dismissed, setDismissed] = useState(false);

  const fin = useMemo(
    () => evaluateMealPlanFinancials(planner.selectedRecipes, planner.userIngredients, planner.totalBudget),
    [planner.selectedRecipes, planner.userIngredients, planner.totalBudget],
  );
  const deficit = fin.totalUsedCost - planner.totalBudget;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      <div className="space-y-2">
        {fin.isOverBudget ? (
          <>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
              <i className="fa-solid fa-triangle-exclamation" /> Melebihi Budget ({formatRupiah(deficit)})
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Evaluasi &amp; Optimasi Budget</h2>
            <p className="text-sm text-slate-500">
              Total biaya resep pilihanmu ({formatRupiah(fin.totalUsedCost)}) melebihi batas anggaran ({formatRupiah(planner.totalBudget)}).
            </p>
          </>
        ) : (
          <>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <i className="fa-solid fa-circle-check" /> Sesuai Budget! Sisa {formatRupiah(fin.remainingBudget)}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Evaluasi &amp; Optimasi Menu</h2>
            <p className="text-sm text-slate-500">Semua menu pilihanmu masuk dalam anggaran. Kamu tetap bisa mengganti menu jika diinginkan.</p>
          </>
        )}
      </div>

      <div className="space-y-2.5">
        <h3 className="text-sm font-bold text-slate-800">Daftar Resep Terpilih &amp; Evaluasi Biaya:</h3>
        {planner.selectedRecipes.map((rec, idx) => {
          const m = calculateRecipeMetrics(rec);
          return (
            <div key={`${rec.id}-${idx}`} className="p-3.5 rounded-2xl border border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center">{idx + 1}</span>
                <div>
                  <div className="font-bold text-sm text-slate-900">{rec.name}</div>
                  <div className="text-xs text-slate-500">Biaya: <strong className="text-emerald-700">{formatRupiah(m.cookCost)}</strong> • Hemat {formatRupiah(m.savings)}</div>
                </div>
              </div>
              <button onClick={() => swapWithCheaper(idx)} className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-xs font-semibold text-slate-600 transition">
                <i className="fa-solid fa-arrows-rotate mr-1" />Ganti Alternatif
              </button>
            </div>
          );
        })}
      </div>

      {fin.isOverBudget && !dismissed && (
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400/30 text-amber-800 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-lightbulb" /></div>
            <div className="space-y-1 flex-1">
              <h4 className="font-bold text-amber-950 text-sm">Rekomendasi Optimasi Budget AI</h4>
              <p className="text-xs text-amber-900 leading-relaxed">
                AI mendeteksi pengeluaran melebihi budget sebesar {formatRupiah(deficit)}. AI dapat mengganti menu termahal dengan menu ekonomis berbasis telur/tempe yang menggunakan bahan sama.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <button onClick={autoOptimize} className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition">
              <i className="fa-solid fa-wand-magic-sparkles mr-1" />Terapkan Optimasi Otomatis AI
            </button>
            <button
              onClick={() => { setDismissed(true); showToast('Optimasi diabaikan. Kamu tetap memegang kendali penuh atas pilihanmu.', 'info'); }}
              className="px-4 py-2 rounded-xl bg-white border border-amber-300 text-amber-900 font-semibold text-xs hover:bg-amber-100/50 transition"
            >
              Abaikan &amp; Tetap Lanjut
            </button>
          </div>
        </div>
      )}

      <div className="pt-4 flex justify-between">
        <button onClick={() => dispatch({ type: 'RESTART_SWIPE' })} className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition">
          <i className="fa-solid fa-rotate-left mr-1.5" />Pilih Ulang Menu
        </button>
        <button onClick={() => goToStep(6)} className={btnNext}><span>Lanjut: Ringkasan Rencana</span><i className="fa-solid fa-arrow-right" /></button>
      </div>
    </div>
  );
}
