import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { RECIPES_DB } from '../data/recipes';
import { calculateRecipeMetrics } from '../lib/recipeMetrics';
import type { RecipeWithMetrics } from '../types';
import RecipeModal from '../components/recipe/RecipeModal';

interface RecipeModalContextValue {
  openRecipeModal: (recipeId: string) => void;
  closeRecipeModal: () => void;
}

const RecipeModalContext = createContext<RecipeModalContextValue | null>(null);

/** Owns the single global recipe modal so any component can open it by id. */
export function RecipeModalProvider({ children }: { children: ReactNode }) {
  const [recipe, setRecipe] = useState<RecipeWithMetrics | null>(null);

  const openRecipeModal = useCallback((id: string) => {
    const raw = RECIPES_DB.find((r) => r.id === id);
    if (raw) setRecipe(calculateRecipeMetrics(raw));
  }, []);
  const closeRecipeModal = useCallback(() => setRecipe(null), []);

  const value = useMemo(() => ({ openRecipeModal, closeRecipeModal }), [openRecipeModal, closeRecipeModal]);

  return (
    <RecipeModalContext.Provider value={value}>
      {children}
      {recipe && <RecipeModal recipe={recipe} onClose={closeRecipeModal} />}
    </RecipeModalContext.Provider>
  );
}

export function useRecipeModal(): RecipeModalContextValue {
  const ctx = useContext(RecipeModalContext);
  if (!ctx) throw new Error('useRecipeModal must be used within RecipeModalProvider');
  return ctx;
}
