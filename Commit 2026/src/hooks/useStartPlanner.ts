import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlannerContext } from '../context/PlannerContext';

/** Replaces startMealPlanner(): reset wizard to step 1 and go to /planner. */
export function useStartPlanner() {
  const { dispatch } = usePlannerContext();
  const navigate = useNavigate();
  return useCallback(() => {
    dispatch({ type: 'START' });
    navigate('/planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch, navigate]);
}
