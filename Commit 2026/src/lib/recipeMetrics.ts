import { YOGYA_PRICE_DB } from '../data/priceDb';
import type { Recipe, RecipeWithMetrics } from '../types';

const FALLBACK_UNIT_PRICE = 1000;

/** Actual cook cost per recipe based on the Yogyakarta price DB. */
export function calculateRecipeMetrics(recipe: Recipe): RecipeWithMetrics {
  let totalCookCost = 0;

  const detailedIngredients = recipe.ingredients.map((item) => {
    const unitPrice = YOGYA_PRICE_DB[item.name]?.pricePerUnit ?? FALLBACK_UNIT_PRICE;
    const estimatedCost = Math.round(item.qty * unitPrice);
    totalCookCost += estimatedCost;
    return { ...item, estimatedCost };
  });

  return {
    ...recipe,
    detailedIngredients,
    cookCost: totalCookCost,
    savings: Math.max(0, recipe.outsidePrice - totalCookCost),
  };
}
