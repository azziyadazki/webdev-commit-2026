import { useMemo } from 'react';
import { useRecipeModal } from '../../context/RecipeModalContext';
import { formatRupiah } from '../../lib/format';
import { calculateRecipeMetrics } from '../../lib/recipeMetrics';
import type { Recipe } from '../../types';
import RecipeImage from './RecipeImage';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { openRecipeModal } = useRecipeModal();
  const rec = useMemo(() => calculateRecipeMetrics(recipe), [recipe]);

  return (
    <article
      onClick={() => openRecipeModal(rec.id)}
      className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition cursor-pointer flex flex-col"
    >
      <div className="relative h-44 bg-slate-100 overflow-hidden">
        <RecipeImage
          src={rec.image}
          alt={rec.name}
          fallbackText={rec.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-slate-800 text-[11px] font-bold shadow-sm">
          {rec.category}
        </span>
        <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-sm">
          Hemat {formatRupiah(rec.savings)}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-1.5">
            <span><i className="fa-regular fa-clock text-emerald-600 mr-1" />{rec.cookingTime} mnt</span>
            <span>•</span>
            <span><i className="fa-solid fa-signal text-amber-500 mr-1" />{rec.difficulty}</span>
          </div>
          <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-emerald-700 transition line-clamp-1">
            {rec.name}
          </h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">{rec.description}</p>
        </div>
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-400 block">Estimasi Biaya Masak</span>
            <span className="font-extrabold text-emerald-700 text-base">{formatRupiah(rec.cookCost)}</span>
            <span className="text-[11px] text-slate-400 line-through ml-1">{formatRupiah(rec.outsidePrice)}</span>
          </div>
          <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition">
            <i className="fa-solid fa-arrow-right text-xs" />
          </span>
        </div>
      </div>
    </article>
  );
}
