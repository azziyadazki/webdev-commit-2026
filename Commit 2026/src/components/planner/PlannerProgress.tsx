import { useNavigate } from 'react-router-dom';
import { TOTAL_PLANNER_STEPS } from '../../lib/constants';
import type { PlannerStep } from '../../types';

const LABELS = ['1. Dapur', '2. Durasi', '3. Budget', '4. Pilih AI', '5. Evaluasi', '6. Ringkasan', '7. Jadwal'];

export default function PlannerProgress({ step }: { step: PlannerStep }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
          Langkah {step} dari {TOTAL_PLANNER_STEPS}
        </span>
        <button onClick={() => navigate('/')} className="text-xs font-medium text-slate-400 hover:text-slate-600">
          <i className="fa-solid fa-xmark mr-1" />Batal
        </button>
      </div>
      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
        <div
          className="bg-emerald-600 h-full rounded-full transition-all duration-300"
          style={{ width: `${Math.round((step / TOTAL_PLANNER_STEPS) * 100)}%` }}
        />
      </div>
      <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
        {LABELS.map((l) => <span key={l}>{l}</span>)}
      </div>
    </div>
  );
}
