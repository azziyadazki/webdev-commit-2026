import { forwardRef, useImperativeHandle, useMemo } from 'react';
import { usePlannerContext } from '../../context/PlannerContext';
import { useSwipe } from '../../hooks/useSwipe';
import { formatRupiah } from '../../lib/format';
import type { RecipeWithMetrics, SwipeDirection } from '../../types';
import RecipeImage from '../recipe/RecipeImage';

interface Props {
  recipe: RecipeWithMetrics;
  onDecision: (direction: SwipeDirection) => void;
}

/** Lets the parent's PILIH / LEWATI buttons trigger the same exit animation as a drag. */
export interface SwipeCardHandle {
  decide: (direction: SwipeDirection) => void;
}

const SwipeCard = forwardRef<SwipeCardHandle, Props>(function SwipeCard({ recipe, onDecision }, ref) {
  const { planner } = usePlannerContext();
  const { cardClassName, cardStyle, likeOpacity, nopeOpacity, decide, handlers } = useSwipe({ onDecision });
  useImperativeHandle(ref, () => ({ decide }), [decide]);

  const ownedNames = useMemo(() => planner.userIngredients.map((i) => i.name.toLowerCase()), [planner.userIngredients]);
  const matched = recipe.ingredients.filter((i) => ownedNames.includes(i.name.toLowerCase()));

  return (
    <div
      {...handlers}
      style={cardStyle}
      className={`${cardClassName} w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative cursor-grab active:cursor-grabbing`}
    >
      <div style={{ opacity: likeOpacity }} className="badge-stamp pointer-events-none absolute top-6 left-6 z-20 px-4 py-1.5 rounded-xl border-4 border-emerald-500 text-emerald-500 font-black text-xl uppercase -rotate-12 bg-white/90">PILIH</div>
      <div style={{ opacity: nopeOpacity }} className="badge-stamp pointer-events-none absolute top-6 right-6 z-20 px-4 py-1.5 rounded-xl border-4 border-rose-500 text-rose-500 font-black text-xl uppercase rotate-12 bg-white/90">LEWATI</div>

      <div className="relative h-52 bg-slate-100">
        <RecipeImage src={recipe.image} alt={recipe.name} fallbackText={recipe.name} draggable={false} className="w-full h-full object-cover pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-600">{recipe.category}</span>
          <h3 className="text-xl font-extrabold mt-1 leading-tight">{recipe.name}</h3>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">{recipe.description}</p>
        <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
          <div>
            <span className="text-[10px] text-slate-400 block">Biaya Masak</span>
            <span className="text-sm font-extrabold text-slate-900">{formatRupiah(recipe.cookCost)}</span>
          </div>
          <div className="border-x border-slate-200">
            <span className="text-[10px] text-slate-400 block">Waktu</span>
            <span className="text-sm font-bold text-slate-700">{recipe.cookingTime} mnt</span>
          </div>
          <div>
            <span className="text-[10px] text-emerald-600 block font-semibold">Hemat</span>
            <span className="text-sm font-extrabold text-emerald-600">{formatRupiah(recipe.savings)}</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Bahan Utama:</span>
          <div className="flex flex-wrap gap-1.5">
            {recipe.ingredients.slice(0, 4).map((ing) => {
              const owned = ownedNames.includes(ing.name.toLowerCase());
              return (
                <span key={ing.name} className={`text-[11px] px-2.5 py-1 rounded-lg font-medium ${owned ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                  {owned && <i className="fa-solid fa-check mr-1" />}{ing.name}
                </span>
              );
            })}
          </div>
          {matched.length > 0 && (
            <p className="text-[11px] text-emerald-600 font-medium pt-0.5">
              <i className="fa-solid fa-sparkles mr-1" />Memanfaatkan {matched.length} bahan yang sudah kamu punya!
            </p>
          )}
        </div>
      </div>
    </div>
  );
});

export default SwipeCard;
