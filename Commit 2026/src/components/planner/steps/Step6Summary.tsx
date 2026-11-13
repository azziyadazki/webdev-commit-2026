import { useMemo } from 'react';
import { usePlannerActions } from '../../../hooks/usePlannerActions';
import { formatRupiah } from '../../../lib/format';
import { evaluateMealPlanFinancials } from '../../../lib/mealPlanFinancials';
import StepShell, { btnBack } from '../StepShell';

const statCard = 'p-4 rounded-2xl bg-slate-50 border border-slate-200/70';

export default function Step6Summary() {
  const { planner, goToStep, generateFinalSchedule } = usePlannerActions();
  const fin = useMemo(
    () => evaluateMealPlanFinancials(planner.selectedRecipes, planner.userIngredients, planner.totalBudget),
    [planner.selectedRecipes, planner.userIngredients, planner.totalBudget],
  );

  return (
    <StepShell
      title="Ringkasan Perencanaan Memasak"
      subtitle="Periksa estimasi biaya bahan terpakai, estimasi belanja pasar, dan daftar bahan sebelum menyusun jadwal."
      footer={
        <>
          <button onClick={() => goToStep(5)} className={btnBack}><i className="fa-solid fa-arrow-left mr-1.5" />Ubah Pilihan</button>
          <button onClick={generateFinalSchedule} className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition flex items-center gap-2">
            <i className="fa-solid fa-calendar-days" /><span>Susun Jadwal Meal Plan</span>
          </button>
        </>
      }
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className={statCard}><span className="text-xs text-slate-500 block">Total Budget</span><span className="text-base sm:text-lg font-extrabold text-slate-900">{formatRupiah(planner.totalBudget)}</span></div>
        <div className={statCard}><span className="text-xs text-slate-500 block">Biaya Bahan Dipakai</span><span className="text-base sm:text-lg font-extrabold text-emerald-700">{formatRupiah(fin.totalUsedCost)}</span></div>
        <div className={statCard}><span className="text-xs text-slate-500 block">Sisa Budget</span><span className="text-base sm:text-lg font-extrabold text-slate-900">{formatRupiah(Math.max(0, fin.remainingBudget))}</span></div>
        <div className="p-4 rounded-2xl bg-emerald-600 text-white"><span className="text-xs text-emerald-100 block">Potensi Hemat</span><span className="text-base sm:text-lg font-extrabold">{formatRupiah(fin.totalSavings)}</span></div>
      </div>

      <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
        <i className="fa-solid fa-basket-shopping text-blue-600 mt-0.5 text-sm" />
        <div>
          <span className="font-bold">Estimasi Uang Belanja di Pasar/Warung: <span className="underline">{formatRupiah(fin.estimatedShoppingOutlay)}</span></span>
          <p className="text-blue-800/90 mt-0.5">Angka ini memperhitungkan satuan beli minimal di pasar Jogja (misal beli tempe 1 papan meski hanya dipakai sebagian) setelah dikurangi bahan yang sudah ada di kosmu.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl border border-slate-200 space-y-2.5">
          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2"><i className="fa-solid fa-cart-shopping text-amber-500" /><span>Daftar Bahan Perlu Dibeli</span></h3>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {fin.toBuyList.length === 0 ? (
              <li className="text-emerald-700 font-semibold"><i className="fa-solid fa-check-circle mr-1" />Semua bahan sudah tersedia di kosmu!</li>
            ) : fin.toBuyList.map((item) => (
              <li key={item.name} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0">
                <span><strong>{item.name}</strong> <span className="text-slate-400">({item.packSuggestion})</span></span>
                <span className="font-bold text-slate-800">{formatRupiah(item.estimatedShopPrice)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 rounded-2xl border border-slate-200 space-y-2.5">
          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2"><i className="fa-solid fa-box-open text-emerald-600" /><span>Bahan Sudah Tersedia / Terpakai</span></h3>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {fin.availableUsedList.length === 0 ? (
              <li className="text-slate-400 italic">Tidak ada bahan awal yang digunakan.</li>
            ) : fin.availableUsedList.map((item) => (
              <li key={item.name} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0">
                <span>{item.name}</span>
                <span className="font-semibold text-emerald-700">{item.qty} {item.unit} terpakai</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StepShell>
  );
}
