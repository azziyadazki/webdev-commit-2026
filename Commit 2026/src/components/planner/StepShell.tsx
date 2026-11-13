import type { ReactNode } from 'react';

interface Props {
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

/** The white rounded card + heading + footer button row used by steps 1-3 and 5-7. */
export default function StepShell({ title, subtitle, children, footer }: Props) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>
      {children}
      <div className="pt-4 flex justify-between gap-3">{footer}</div>
    </div>
  );
}

export const btnBack = 'px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition';
export const btnNext = 'px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition flex items-center gap-2';
