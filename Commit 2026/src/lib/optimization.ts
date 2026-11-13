import { RECIPES_DB } from '../data/recipes';
import type { Ingredient, RecipeWithMetrics } from '../types';
import { evaluateMealPlanFinancials } from './mealPlanFinancials';
import { calculateRecipeMetrics } from './recipeMetrics';

const MAX_OPTIMIZATION_PASSES = 10;

const cheapestFirst = (): RecipeWithMetrics[] =>
  RECIPES_DB.map(calculateRecipeMetrics).sort((a, b) => a.cookCost - b.cookCost);

/** Returns the replacement recipe for `index`, or null if no alternative exists. */
export function pickCheaperAlternative(
  selected: RecipeWithMetrics[],
  index: number,
): RecipeWithMetrics | null {
  const current = selected[index];
  const pool = cheapestFirst().filter((r) => r.id !== current.id);
  return pool.length ? pool[index % pool.length] : null;
}

/** Repeatedly replaces the most expensive selection with the cheapest pool recipes until within budget. */
export function autoOptimizeOverBudget(
  selected: RecipeWithMetrics[],
  userIngredients: Ingredient[],
  totalBudget: number,
): RecipeWithMetrics[] {
  const pool = cheapestFirst();
  const next = [...selected];
  let poolIdx = 0;

  while (
    evaluateMealPlanFinancials(next, userIngredients, totalBudget).isOverBudget &&
    poolIdx < MAX_OPTIMIZATION_PASSES
  ) {
    let maxIdx = 0;
    let maxCost = -1;
    next.forEach((r, i) => {
      const c = calculateRecipeMetrics(r).cookCost;
      if (c > maxCost) {
        maxCost = c;
        maxIdx = i;
      }
    });
    next[maxIdx] = pool[poolIdx % pool.length];
    poolIdx++;
  }
  return next;
}
