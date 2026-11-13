import { useNavigate } from 'react-router-dom';
import { useSavedPlans } from '../../context/SavedPlansContext';
import { useToast } from '../../context/ToastContext';
import { useStartPlanner } from '../../hooks/useStartPlanner';
import SavedPlanCard from './SavedPlanCard';

export default function SavedPlansSection() {
  const { plans, deletePlan } = useSavedPlans();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const startPlanner = useStartPlanner();

  if (plans.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <i className="fa-solid fa-calendar-check text-emerald-600" /><span>Meal Plan Saya</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">Tersimpan secara lokal di sesi browser perangkatmu tanpa perlu akun.</p>
        </div>
        <button onClick={startPlanner} className="text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700">
          + Buat Rencana Baru
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map((plan) => (
          <SavedPlanCard
            key={plan.id}
            plan={plan}
            onOpen={() => navigate(`/saved/${plan.id}`)}
            onDelete={() => { deletePlan(plan.id); showToast('Meal plan berhasil dihapus.', 'info'); }}
          />
        ))}
      </div>
    </div>
  );
}
