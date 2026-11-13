import { formatRupiah } from '../../lib/format';
import type { SavedMealPlan } from '../../types';

interface Props {
  plan: SavedMealPlan;
  onOpen: () => void;
  onDelete: () => void;
}

export default function SavedPlanCard({ plan, onOpen, onDelete }: Props) {
  return (
    <div
      onClick={onOpen}
      className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between gap-4"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-1">
            {plan.durationDays} Hari • {plan.frequencyPerDay}x Masak/Hari
          </span>
          <h3 className="font-bold text-slate-900 text-base">{plan.title}</h3>
          <p className="text-xs text-slate-400 mt-0.5">Dibuat: {plan.createdAt}</p>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          title="Hapus Meal Plan"
          className="text-slate-300 hover:text-rose-500 p-1.5 transition"
        >
          <i className="fa-solid fa-trash-can" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 text-xs">
        <div>
          <span className="text-slate-400 block">Estimasi Pengeluaran</span>
          <span className="font-bold text-slate-800">{formatRupiah(plan.totalUsedCost)}</span>
        </div>
        <div className="text-right">
          <span className="text-slate-400 block">Potensi Penghematan</span>
          <span className="font-extrabold text-emerald-600">{formatRupiah(plan.totalSavings)}</span>
        </div>
      </div>
    </div>
  );
}
