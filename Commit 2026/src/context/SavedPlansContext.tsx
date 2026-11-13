import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { SavedMealPlan } from '../types';

interface SavedPlansContextValue {
  plans: SavedMealPlan[];
  addPlan: (plan: SavedMealPlan) => void;
  deletePlan: (id: string) => void;
  getPlan: (id: string) => SavedMealPlan | undefined;
}

const SavedPlansContext = createContext<SavedPlansContextValue | null>(null);

/** In-memory (session only), same as the original. Swap the useState for localStorage here if you want persistence. */
export function SavedPlansProvider({ children }: { children: ReactNode }) {
  const [plans, setPlans] = useState<SavedMealPlan[]>([]);

  const addPlan = useCallback((plan: SavedMealPlan) => setPlans((p) => [plan, ...p]), []);
  const deletePlan = useCallback((id: string) => setPlans((p) => p.filter((x) => x.id !== id)), []);
  const getPlan = useCallback((id: string) => plans.find((p) => p.id === id), [plans]);

  const value = useMemo(() => ({ plans, addPlan, deletePlan, getPlan }), [plans, addPlan, deletePlan, getPlan]);
  return <SavedPlansContext.Provider value={value}>{children}</SavedPlansContext.Provider>;
}

export function useSavedPlans(): SavedPlansContextValue {
  const ctx = useContext(SavedPlansContext);
  if (!ctx) throw new Error('useSavedPlans must be used within SavedPlansProvider');
  return ctx;
}
