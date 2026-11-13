import { useCallback } from 'react';
import { usePlannerContext } from '../context/PlannerContext';
import { useToast } from '../context/ToastContext';
import { useSavedPlans } from '../context/SavedPlansContext';
import { AI_LOADING_MS, MIN_BUDGET } from '../lib/constants';
import { formatDateId } from '../lib/format';
import { evaluateMealPlanFinancials } from '../lib/mealPlanFinancials';
import { autoOptimizeOverBudget, pickCheaperAlternative } from '../lib/optimization';
import { buildCandidateDeck } from '../lib/recommend';
import { buildSchedule } from '../lib/schedule';
import type { Ingredient, PlannerStep, SavedMealPlan } from '../types';

/** Orchestrates side-effectful planner flows (toasts, timers, validation) on top of the pure reducer. */
export function usePlannerActions() {
  const { planner, dispatch, targetMealCount } = usePlannerContext();
  const { showToast } = useToast();
  const { plans, addPlan } = useSavedPlans();

  const goToStep = useCallback(
    (step: PlannerStep) => {
      if (step === 2 && planner.equipment.length === 0) {
        showToast('Pilih minimal 1 peralatan masak yang kamu miliki di kos.', 'warning');
        return;
      }
      dispatch({ type: 'GO_TO_STEP', step });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [planner.equipment.length, dispatch, showToast],
  );

  const addIngredient = useCallback(
    (ingredient: Ingredient) => {
      dispatch({ type: 'ADD_INGREDIENT', ingredient });
      showToast(`${ingredient.name} (${ingredient.qty} ${ingredient.unit}) ditambahkan ke inventaris.`, 'success');
    },
    [dispatch, showToast],
  );

  /** Step 3 -> 4. Returns after scheduling the fake "AI" delay. */
  const generateAIRecipes = useCallback(
    (budget: number, onReady?: () => void) => {
      if (!budget || budget < MIN_BUDGET) {
        showToast('Masukkan total budget minimal Rp 5.000.', 'warning');
        return;
      }
      dispatch({ type: 'BEGIN_GENERATION', budget });

      window.setTimeout(() => {
        const { deck, usedEquipmentFallback } = buildCandidateDeck(
          planner.equipment,
          planner.userIngredients,
          targetMealCount,
        );
        if (usedEquipmentFallback) {
          showToast('Beberapa resep memerlukan alat tambahan, sesuaikan dengan alat di kosmu.', 'info');
        }
        dispatch({ type: 'SET_CANDIDATES', recipes: deck });
        onReady?.();
      }, AI_LOADING_MS);
    },
    [planner.equipment, planner.userIngredients, targetMealCount, dispatch, showToast],
  );

  const swapWithCheaper = useCallback(
    (index: number) => {
      const replacement = pickCheaperAlternative(planner.selectedRecipes, index);
      if (!replacement) return;
      dispatch({ type: 'REPLACE_SELECTED', index, recipe: replacement });
      showToast(`Menu diganti menjadi ${replacement.name}.`, 'success');
    },
    [planner.selectedRecipes, dispatch, showToast],
  );

  const autoOptimize = useCallback(() => {
    const next = autoOptimizeOverBudget(planner.selectedRecipes, planner.userIngredients, planner.totalBudget);
    dispatch({ type: 'SET_SELECTED', recipes: next });
    showToast('AI berhasil mengoptimalkan menu agar sesuai budget!', 'success');
  }, [planner, dispatch, showToast]);

  /** Step 6 -> 7 */
  const generateFinalSchedule = useCallback(() => {
    dispatch({
      type: 'SET_SCHEDULE',
      schedule: buildSchedule(planner.selectedRecipes, planner.durationDays, planner.frequencyPerDay),
    });
    goToStep(7);
  }, [planner, dispatch, goToStep]);

  /** Step 8: persist + toast. Caller navigates home. */
  const saveMealPlan = useCallback((): void => {
    const fin = evaluateMealPlanFinancials(planner.selectedRecipes, planner.userIngredients, planner.totalBudget);
    const plan: SavedMealPlan = {
      id: 'mp-' + Date.now(),
      title: `Rencana Makan Kos #${plans.length + 1}`,
      createdAt: formatDateId(new Date()),
      durationDays: planner.durationDays,
      frequencyPerDay: planner.frequencyPerDay,
      totalBudget: planner.totalBudget,
      totalUsedCost: fin.totalUsedCost,
      totalSavings: fin.totalSavings,
      schedule: planner.generatedSchedule,
    };
    addPlan(plan);
    showToast('Meal Plan berhasil disimpan dan ditambahkan ke Beranda!', 'success');
  }, [planner, plans.length, addPlan, showToast]);

  return {
    planner,
    dispatch,
    targetMealCount,
    goToStep,
    addIngredient,
    generateAIRecipes,
    swapWithCheaper,
    autoOptimize,
    generateFinalSchedule,
    saveMealPlan,
  };
}
