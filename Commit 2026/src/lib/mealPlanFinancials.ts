import { YOGYA_PRICE_DB } from '../data/priceDb';
import type {
  Ingredient,
  MealPlanFinancials,
  Recipe,
  ToBuyItem,
  UsedIngredient,
} from '../types';
import { calculateRecipeMetrics } from './recipeMetrics';

const FALLBACK_SHOP_PRICE = 5000;

/** Distinguishes "used cost" (what the recipes consume) from "shopping outlay" (packs you must buy). */
export function evaluateMealPlanFinancials(
  selectedRecipes: Recipe[],
  userIngredients: Ingredient[],
  totalBudget: number,
): MealPlanFinancials {
  let totalUsedCost = 0;
  let totalOutsideCost = 0;
  const totalNeeded: Record<string, { qty: number; unit: string }> = {};

  selectedRecipes.forEach((rec) => {
    const metrics = calculateRecipeMetrics(rec);
    totalUsedCost += metrics.cookCost;
    totalOutsideCost += metrics.outsidePrice;

    rec.ingredients.forEach((ing) => {
      totalNeeded[ing.name] ??= { qty: 0, unit: ing.unit };
      totalNeeded[ing.name].qty += ing.qty;
    });
  });

  const owned: Record<string, number> = {};
  userIngredients.forEach((u) => {
    owned[u.name] = (owned[u.name] || 0) + Number(u.qty);
  });

  const toBuyList: ToBuyItem[] = [];
  const availableUsedList: UsedIngredient[] = [];
  let estimatedShoppingOutlay = 0;

  Object.entries(totalNeeded).forEach(([name, needed]) => {
    const ownedQty = owned[name] || 0;
    const dbRef = YOGYA_PRICE_DB[name];

    if (ownedQty > 0) {
      availableUsedList.push({
        name,
        qty: Number(Math.min(needed.qty, ownedQty).toFixed(1)),
        unit: needed.unit,
      });
    }

    const deficit = needed.qty - ownedQty;
    if (deficit > 0) {
      const packsNeeded = dbRef ? Math.ceil(deficit / dbRef.marketPackQty) : 1;
      const shopPrice = dbRef ? packsNeeded * dbRef.marketPackPrice : FALLBACK_SHOP_PRICE;
      estimatedShoppingOutlay += shopPrice;

      toBuyList.push({
        name,
        deficitQty: Number(deficit.toFixed(1)),
        unit: needed.unit,
        packSuggestion: dbRef ? `${packsNeeded}x (${dbRef.packLabel})` : `${deficit} ${needed.unit}`,
        estimatedShopPrice: shopPrice,
      });
    }
  });

  return {
    totalUsedCost,
    totalOutsideCost,
    totalSavings: Math.max(0, totalOutsideCost - totalUsedCost),
    remainingBudget: totalBudget - totalUsedCost,
    estimatedShoppingOutlay,
    toBuyList,
    availableUsedList,
    isOverBudget: totalUsedCost > totalBudget,
  };
}
