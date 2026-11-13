import { createContext, useContext, useMemo, useReducer, type Dispatch, type ReactNode } from 'react';
import type { PlannerState } from '../types';
import { initialPlannerState, plannerReducer, type PlannerAction } from './plannerReducer';

interface PlannerContextValue {
  planner: PlannerState;
  dispatch: Dispatch<PlannerAction>;
  /** durationDays * frequencyPerDay */
  targetMealCount: number;
}

const PlannerContext = createContext<PlannerContextValue | null>(null);

export function PlannerProvider({ children }: { children: ReactNode }) {
  const [planner, dispatch] = useReducer(plannerReducer, initialPlannerState);
  const value = useMemo(
    () => ({ planner, dispatch, targetMealCount: planner.durationDays * planner.frequencyPerDay }),
    [planner],
  );
  return <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>;
}

export function usePlannerContext(): PlannerContextValue {
  const ctx = useContext(PlannerContext);
  if (!ctx) throw new Error('usePlannerContext must be used within PlannerProvider');
  return ctx;
}
