import type {
  Frequency,
  Ingredient,
  PlannerState,
  PlannerStep,
  RecipeWithMetrics,
  ScheduleMatrix,
} from '../types';

export const initialPlannerState: PlannerState = {
  step: 1,
  equipment: ['Rice cooker', 'Kompor', 'Wajan', 'Pisau'],
  userIngredients: [
    { name: 'Beras', qty: 500, unit: 'gram' },
    { name: 'Minyak Goreng', qty: 200, unit: 'ml' },
  ],
  durationDays: 3,
  frequencyPerDay: 2,
  totalBudget: 75000,
  candidateRecipes: [],
  currentSwipeIndex: 0,
  selectedRecipes: [],
  generatedSchedule: [],
};

export type PlannerAction =
  | { type: 'START' } // startMealPlanner(): step 1, clear selection
  | { type: 'GO_TO_STEP'; step: PlannerStep }
  | { type: 'TOGGLE_EQUIPMENT'; id: string }
  | { type: 'ADD_INGREDIENT'; ingredient: Ingredient } // merges qty when the name already exists
  | { type: 'REMOVE_INGREDIENT'; index: number }
  | { type: 'SET_DURATION'; days: number }
  | { type: 'SET_FREQUENCY'; frequency: Frequency }
  | { type: 'SET_BUDGET'; budget: number }
  | { type: 'BEGIN_GENERATION'; budget: number }
  | { type: 'SET_CANDIDATES'; recipes: RecipeWithMetrics[] }
  | { type: 'SWIPE_SELECT' } // like: push current card, advance
  | { type: 'SWIPE_SKIP' } // nope: advance
  | { type: 'REPLACE_SELECTED'; index: number; recipe: RecipeWithMetrics }
  | { type: 'SET_SELECTED'; recipes: RecipeWithMetrics[] }
  | { type: 'RESTART_SWIPE' }
  | { type: 'SET_SCHEDULE'; schedule: ScheduleMatrix };

export function plannerReducer(state: PlannerState, action: PlannerAction): PlannerState {
  switch (action.type) {
    case 'START':
      return { ...state, step: 1, selectedRecipes: [], currentSwipeIndex: 0 };

    case 'GO_TO_STEP':
      return { ...state, step: action.step };

    case 'TOGGLE_EQUIPMENT':
      return {
        ...state,
        equipment: state.equipment.includes(action.id)
          ? state.equipment.filter((e) => e !== action.id)
          : [...state.equipment, action.id],
      };

    case 'ADD_INGREDIENT': {
      const { ingredient } = action;
      const exists = state.userIngredients.some((i) => i.name.toLowerCase() === ingredient.name.toLowerCase());
      return {
        ...state,
        userIngredients: exists
          ? state.userIngredients.map((i) =>
              i.name.toLowerCase() === ingredient.name.toLowerCase() ? { ...i, qty: i.qty + ingredient.qty } : i,
            )
          : [...state.userIngredients, ingredient],
      };
    }

    case 'REMOVE_INGREDIENT':
      return { ...state, userIngredients: state.userIngredients.filter((_, i) => i !== action.index) };

    case 'SET_DURATION':
      return { ...state, durationDays: action.days };

    case 'SET_FREQUENCY':
      return { ...state, frequencyPerDay: action.frequency };

    case 'SET_BUDGET':
      return { ...state, totalBudget: action.budget };

    case 'BEGIN_GENERATION':
      return { ...state, totalBudget: action.budget, selectedRecipes: [], candidateRecipes: [], currentSwipeIndex: 0, step: 4 };

    case 'SET_CANDIDATES':
      return { ...state, candidateRecipes: action.recipes };

    case 'SWIPE_SELECT':
      return {
        ...state,
        selectedRecipes: [...state.selectedRecipes, state.candidateRecipes[state.currentSwipeIndex]],
        currentSwipeIndex: state.currentSwipeIndex + 1,
      };

    case 'SWIPE_SKIP':
      return { ...state, currentSwipeIndex: state.currentSwipeIndex + 1 };

    case 'REPLACE_SELECTED':
      return {
        ...state,
        selectedRecipes: state.selectedRecipes.map((r, i) => (i === action.index ? action.recipe : r)),
      };

    case 'SET_SELECTED':
      return { ...state, selectedRecipes: action.recipes };

    case 'RESTART_SWIPE':
      return { ...state, selectedRecipes: [], currentSwipeIndex: 0, step: 4 };

    case 'SET_SCHEDULE':
      return { ...state, generatedSchedule: action.schedule };

    default:
      return state;
  }
}
