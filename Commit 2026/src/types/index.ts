export interface Ingredient {
  name: string;
  qty: number;
  unit: string;
}

export interface PriceEntry {
  unit: string;
  pricePerUnit: number;
  marketPackQty: number;
  marketPackPrice: number;
  packLabel: string;
}

export interface EquipmentOption {
  id: string;
  label: string;
  icon: string; // Font Awesome class, e.g. "fa-bowl-rice"
}

export interface Recipe {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  cookingTime: number;
  outsidePrice: number;
  image: string;
  description: string;
  equipment: string[];
  ingredients: Ingredient[];
  instructions: string[];
}

export interface IngredientWithCost extends Ingredient {
  estimatedCost: number;
}

export interface RecipeWithMetrics extends Recipe {
  detailedIngredients: IngredientWithCost[];
  cookCost: number;
  savings: number;
}

export interface ScoredRecipe extends RecipeWithMetrics {
  score: number;
}

export interface ToBuyItem {
  name: string;
  deficitQty: number;
  unit: string;
  packSuggestion: string;
  estimatedShopPrice: number;
}

export interface UsedIngredient {
  name: string;
  qty: number;
  unit: string;
}

export interface MealPlanFinancials {
  totalUsedCost: number;
  totalOutsideCost: number;
  totalSavings: number;
  remainingBudget: number;
  estimatedShoppingOutlay: number;
  toBuyList: ToBuyItem[];
  availableUsedList: UsedIngredient[];
  isOverBudget: boolean;
}

/** schedule[dayIndex][slotIndex] */
export type ScheduleMatrix = Recipe[][];

export interface SavedMealPlan {
  id: string;
  title: string;
  createdAt: string;
  durationDays: number;
  frequencyPerDay: Frequency;
  totalBudget: number;
  totalUsedCost: number;
  totalSavings: number;
  schedule: ScheduleMatrix;
}

export type Frequency = 1 | 2 | 3;
export type PlannerStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type ToastType = 'success' | 'warning' | 'error' | 'info';
export type SwipeDirection = 'left' | 'right';

export interface PlannerState {
  step: PlannerStep;
  equipment: string[];
  userIngredients: Ingredient[];
  durationDays: number;
  frequencyPerDay: Frequency;
  totalBudget: number;
  candidateRecipes: RecipeWithMetrics[];
  currentSwipeIndex: number;
  selectedRecipes: RecipeWithMetrics[];
  generatedSchedule: ScheduleMatrix;
}
