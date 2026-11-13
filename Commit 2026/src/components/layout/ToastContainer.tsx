import { useToast } from '../../context/ToastContext';
import type { ToastType } from '../../types';

const COLORS: Record<ToastType, string> = {
  success: 'bg-emerald-700 text-white border-emerald-600',
  warning: 'bg-amber-500 text-slate-950 border-amber-400',
  error: 'bg-rose-600 text-white border-rose-500',
  info: 'bg-slate-800 text-white border-slate-700',
};
const ICONS: Record<ToastType, string> = {
  success: 'fa-circle-check',
  warning: 'fa-triangle-exclamation',
  error: 'fa-circle-xmark',
  info: 'fa-circle-info',
};

export default function ToastContainer() {
  const { toasts } = useToast();
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg border text-xs sm:text-sm font-medium ${COLORS[t.type]}`}
        >
          <i className={`fa-solid ${ICONS[t.type]} text-base`} />
          <span className="flex-1">{t.message}</span>
        </div>
      ))}
    </div>
  );
}
