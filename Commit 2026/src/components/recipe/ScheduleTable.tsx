import { useRecipeModal } from '../../context/RecipeModalContext';
import { DAY_LABELS } from '../../lib/constants';
import { formatRupiah, getSlotLabel } from '../../lib/format';
import { calculateRecipeMetrics } from '../../lib/recipeMetrics';
import type { Frequency, ScheduleMatrix } from '../../types';

interface Props {
  schedule: ScheduleMatrix;
  frequency: Frequency;
  /** "planner" = emerald button cells (step 7). "saved" = plain text cells (saved plan detail). */
  variant?: 'planner' | 'saved';
}

export default function ScheduleTable({ schedule, frequency, variant = 'planner' }: Props) {
  const { openRecipeModal } = useRecipeModal();
  const dayLabels = DAY_LABELS.slice(0, schedule.length);

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full text-left border-collapse min-w-[520px]">
        <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase">
          <tr>
            <th className="p-3.5">{variant === 'planner' ? 'Waktu Makan' : 'Sesi'}</th>
            {dayLabels.map((d) => <th key={d} className="p-3.5">{d}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm">
          {Array.from({ length: frequency }, (_, f) => (
            <tr key={f}>
              <td className="p-3.5 font-bold text-slate-700 bg-slate-50/60">{getSlotLabel(frequency, f)}</td>
              {schedule.map((day, dIdx) => {
                const rec = day[f];
                if (!rec) return <td key={dIdx} className="p-3.5 text-slate-400">-</td>;
                const { cookCost } = calculateRecipeMetrics(rec);
                return (
                  <td key={dIdx} className="p-3.5">
                    <button
                      onClick={() => openRecipeModal(rec.id)}
                      className={
                        variant === 'planner'
                          ? 'w-full text-left p-2.5 rounded-xl bg-emerald-50/50 hover:bg-emerald-100/70 border border-emerald-200/60 transition group'
                          : 'text-left group'
                      }
                    >
                      <div className="font-bold text-slate-900 group-hover:text-emerald-700 text-xs sm:text-sm">{rec.name}</div>
                      <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                        {formatRupiah(cookCost)}
                        {variant === 'planner' && <span className="text-slate-400 font-normal"> • {rec.cookingTime}m</span>}
                      </div>
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
