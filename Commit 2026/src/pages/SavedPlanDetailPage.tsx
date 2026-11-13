import { Link, Navigate, useParams } from 'react-router-dom';
import ScheduleTable from '../components/recipe/ScheduleTable';
import { useSavedPlans } from '../context/SavedPlansContext';
import { formatRupiah } from '../lib/format';

export default function SavedPlanDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { getPlan } = useSavedPlans();
  const plan = id ? getPlan(id) : undefined;

  // State is in-memory, so a hard refresh on /saved/:id lands here -> send home.
  if (!plan) return <Navigate to="/" replace />;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 transition">
        <i className="fa-solid fa-arrow-left" /><span>Kembali ke Beranda</span>
      </Link>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Tersimpan di Browser</span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">{plan.title}</h2>
            <p className="text-xs text-slate-500 mt-1">
              Tanggal Perencanaan: {plan.createdAt} • {plan.durationDays} Hari ({plan.frequencyPerDay}x/hari)
            </p>
          </div>
          <div className="flex gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-500 block">Estimasi Biaya</span>
              <span className="font-extrabold text-slate-900">{formatRupiah(plan.totalUsedCost)}</span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-[11px] text-emerald-700 block">Potensi Hemat</span>
              <span className="font-extrabold text-emerald-700">{formatRupiah(plan.totalSavings)}</span>
            </div>
          </div>
        </div>

        <ScheduleTable schedule={plan.schedule} frequency={plan.frequencyPerDay} variant="saved" />
      </div>
    </div>
  );
}
