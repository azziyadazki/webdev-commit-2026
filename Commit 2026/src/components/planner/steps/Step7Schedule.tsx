import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlannerActions } from '../../../hooks/usePlannerActions';
import { formatRupiah } from '../../../lib/format';
import { evaluateMealPlanFinancials } from '../../../lib/mealPlanFinancials';
import ScheduleTable from '../../recipe/ScheduleTable';
import { btnBack } from '../StepShell';

export default function Step7Schedule() {
  const { planner, goToStep, saveMealPlan } = usePlannerActions();
  const navigate = useNavigate();
  const { totalSavings } = useMemo(
    () => evaluateMealPlanFinancials(planner.selectedRecipes, planner.userIngredients, planner.totalBudget),
    [planner.selectedRecipes, planner.userIngredients, planner.totalBudget],
  );

  const onSave = () => {
    saveMealPlan();
    navigate('/');
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-1">Siap Dimasak!</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Jadwal Meal Plan Kosmu</h2>
          <p className="text-xs sm:text-sm text-slate-500">Klik menu pada tabel untuk melihat cara memasak, alat, dan rincian penghematan.</p>
        </div>
        <div className="text-left sm:text-right bg-emerald-50 px-4 py-2.5 rounded-2xl border border-emerald-100">
          <span className="text-[11px] text-emerald-700 block font-medium">Total Potensi Hemat</span>
          <span className="text-lg font-extrabold text-emerald-700">{formatRupiah(totalSavings)}</span>
        </div>
      </div>

      <ScheduleTable schedule={planner.generatedSchedule} frequency={planner.frequencyPerDay} variant="planner" />

      <div className="pt-2 flex flex-col sm:flex-row justify-between gap-3">
        <button onClick={() => goToStep(6)} className={btnBack}><i className="fa-solid fa-arrow-left mr-1.5" />Kembali ke Ringkasan</button>
        <button onClick={onSave} className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition flex items-center justify-center gap-2">
          <i className="fa-solid fa-bookmark" /><span>Simpan Meal Plan ke Beranda</span>
        </button>
      </div>
    </div>
  );
}
