import { useState } from 'react';
import { EQUIPMENT_OPTIONS } from '../../../data/equipment';
import { useToast } from '../../../context/ToastContext';
import { usePlannerActions } from '../../../hooks/usePlannerActions';
import { INGREDIENT_UNITS, QUICK_ADD_INGREDIENTS } from '../../../lib/constants';
import StepShell, { btnNext } from '../StepShell';

export default function Step1Kitchen() {
  const { planner, dispatch, goToStep, addIngredient } = usePlannerActions();
  const { showToast } = useToast();

  const [name, setName] = useState('');
  const [qty, setQty] = useState('');
  const [unit, setUnit] = useState<string>('gram');

  const submit = () => {
    const parsed = parseFloat(qty);
    if (!name.trim() || isNaN(parsed) || parsed <= 0) {
      showToast('Masukkan nama bahan dan kuantitas yang valid.', 'warning');
      return;
    }
    addIngredient({ name: name.trim(), qty: parsed, unit });
    setName('');
    setQty('');
  };

  return (
    <StepShell
      title="Inventaris Dapur Kosmu"
      subtitle="Pilih peralatan yang kamu punya dan masukkan sisa bahan makanan agar AI mengoptimalkan belanja."
      footer={
        <>
          <span />
          <button onClick={() => goToStep(2)} className={btnNext}>
            <span>Lanjut: Durasi &amp; Frekuensi</span><i className="fa-solid fa-arrow-right" />
          </button>
        </>
      }
    >
      <div className="space-y-3">
        <label className="block text-sm font-bold text-slate-800">
          A. Peralatan Masak Tersedia <span className="text-rose-500">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {EQUIPMENT_OPTIONS.map((eq) => {
            const selected = planner.equipment.includes(eq.id);
            return (
              <button
                key={eq.id}
                type="button"
                onClick={() => dispatch({ type: 'TOGGLE_EQUIPMENT', id: eq.id })}
                className={`p-3 rounded-2xl border-2 text-left flex items-center gap-2.5 transition ${
                  selected ? 'border-emerald-600 bg-emerald-50/70 text-emerald-900' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${selected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  <i className={`fa-solid ${eq.icon} text-xs`} />
                </div>
                <span className="text-xs sm:text-sm font-bold">{eq.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3 pt-2 border-t border-slate-100">
        <label className="block text-sm font-bold text-slate-800">
          B. Bahan yang Sudah Ada di Kos <span className="text-xs font-normal text-slate-400">(Opsional)</span>
        </label>

        <div className="flex flex-wrap gap-1.5">
          <span className="text-xs text-slate-400 py-1">Tambah cepat:</span>
          {QUICK_ADD_INGREDIENTS.map((q) => (
            <button
              key={q.name}
              type="button"
              onClick={() => addIngredient({ ...q })}
              className="text-xs px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 transition"
            >
              + {q.name} ({q.qty} {q.unit})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-2">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama bahan (mis: Tahu)" className="col-span-5 sm:col-span-6 px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500" />
          <input type="number" min={1} value={qty} onChange={(e) => setQty(e.target.value)} placeholder="Jml" className="col-span-3 sm:col-span-2 px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500" />
          <select value={unit} onChange={(e) => setUnit(e.target.value)} className="col-span-4 sm:col-span-2 px-2 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-emerald-500">
            {INGREDIENT_UNITS.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
          <button type="button" onClick={submit} className="col-span-12 sm:col-span-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm transition">
            Tambah
          </button>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {planner.userIngredients.length === 0 ? (
            <span className="text-xs text-slate-400 italic">Belum ada bahan yang dimasukkan (AI akan menyusun daftar belanja penuh).</span>
          ) : (
            planner.userIngredients.map((item, idx) => (
              <span key={`${item.name}-${idx}`} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold">
                <span>{item.name} ({item.qty} {item.unit})</span>
                <button type="button" onClick={() => dispatch({ type: 'REMOVE_INGREDIENT', index: idx })} className="text-emerald-600 hover:text-rose-600">
                  <i className="fa-solid fa-xmark" />
                </button>
              </span>
            ))
          )}
        </div>
      </div>
    </StepShell>
  );
}
