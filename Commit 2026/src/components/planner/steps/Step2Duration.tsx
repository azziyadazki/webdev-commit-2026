import { usePlannerActions } from '../../../hooks/usePlannerActions';
import { FREQUENCY_OPTIONS, MAX_PLAN_DAYS } from '../../../lib/constants';
import StepShell, { btnBack, btnNext } from '../StepShell';

export default function Step2Duration() {
  const { planner, dispatch, goToStep, targetMealCount } = usePlannerActions();

  return (
    <StepShell
      title="Durasi & Frekuensi Memasak"
      subtitle="Tentukan berapa hari kamu ingin merencanakan menu dan berapa kali masak setiap harinya."
      footer={
        <>
          <button onClick={() => goToStep(1)} className={btnBack}><i className="fa-solid fa-arrow-left mr-1.5" />Kembali</button>
          <button onClick={() => goToStep(3)} className={btnNext}><span>Lanjut: Atur Budget</span><i className="fa-solid fa-arrow-right" /></button>
        </>
      }
    >
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-bold text-slate-800">Durasi Perencanaan (1 - {MAX_PLAN_DAYS} Hari)</label>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm">{planner.durationDays} Hari</span>
          </div>
          <input
            type="range" min={1} max={MAX_PLAN_DAYS} value={planner.durationDays}
            onChange={(e) => dispatch({ type: 'SET_DURATION', days: Number(e.target.value) })}
            className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>1 Hari</span><span>3 Hari</span><span>5 Hari</span><span>7 Hari (1 Minggu)</span>
          </div>
        </div>

        <div className="pt-3">
          <label className="block text-sm font-bold text-slate-800 mb-2">Frekuensi Memasak per Hari</label>
          <div className="grid grid-cols-3 gap-3">
            {FREQUENCY_OPTIONS.map(({ value, subtitle }) => {
              const active = planner.frequencyPerDay === value;
              return (
                <button
                  key={value} type="button"
                  onClick={() => dispatch({ type: 'SET_FREQUENCY', frequency: value })}
                  className={`p-4 rounded-2xl border-2 text-center transition ${active ? 'border-emerald-600 bg-emerald-50/60' : 'border-slate-200 hover:border-emerald-400'}`}
                >
                  <div className={`text-lg font-extrabold ${active ? 'text-emerald-700' : 'text-slate-800'}`}>{value}x</div>
                  <div className={`text-xs ${active ? 'text-emerald-700 font-medium' : 'text-slate-500'}`}>{subtitle}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <span className="text-sm text-slate-600">Target Total Sesi Masak:</span>
          <span className="font-extrabold text-emerald-700 text-base">{targetMealCount} Resep</span>
        </div>
      </div>
    </StepShell>
  );
}
