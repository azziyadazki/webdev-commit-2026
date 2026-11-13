import { RECIPES_DB } from '../data/recipes';
import type { Ingredient, ScoredRecipe } from '../types';
import { calculateRecipeMetrics } from './recipeMetrics';

export interface DeckResult {
  deck: ScoredRecipe[];
  usedEquipmentFallback: boolean;
}

/** Filter by equipment, score by owned-ingredient overlap vs cost, pad deck so the user can reach the target. */
export function buildCandidateDeck(
  equipment: string[],
  userIngredients: Ingredient[],
  targetCount: number,
): DeckResult {
  const ownedNames = userIngredients.map((i) => i.name.toLowerCase());

  let compatible = RECIPES_DB.filter((rec) => rec.equipment.every((eq) => equipment.includes(eq)));
  const usedEquipmentFallback = compatible.length < 3;
  if (usedEquipmentFallback) compatible = [...RECIPES_DB];

  const scored: ScoredRecipe[] = compatible
    .map((rec) => {
      const metrics = calculateRecipeMetrics(rec);
      const overlap = rec.ingredients.filter((ing) => ownedNames.includes(ing.name.toLowerCase())).length;
      return { ...metrics, score: overlap * 5000 - metrics.cookCost };
    })
    .sort((a, b) => b.score - a.score);

  let deck = [...scored];
  while (deck.length < targetCount + 6) deck = deck.concat(scored);

  return { deck, usedEquipmentFallback };
}
