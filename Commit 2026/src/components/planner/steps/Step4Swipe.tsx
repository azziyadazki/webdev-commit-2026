import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useRecipeModal } from '../../../context/RecipeModalContext';
import { useToast } from '../../../context/ToastContext';
import { usePlannerActions } from '../../../hooks/usePlannerActions';
import { formatRupiah } from '../../../lib/format';
import { calculateRecipeMetrics } from '../../../lib/recipeMetrics';
import type { SwipeDirection } from '../../../types';
import SwipeCard, { type SwipeCardHandle } from '../SwipeCard';

export default function Step4Swipe() {
  const { planner, dispatch, goToStep, targetMealCount } = usePlannerActions();
  const { showToast } = useToast();
  const { openRecipeModal } = useRecipeModal();
  const cardRef = useRef<SwipeCardHandle>(null);

  const isLoading = planner.candidateRecipes.length === 0;
  const current = planner.candidateRecipes[planner.currentSwipeIndex];

  const runningCost = useMemo(
    () => planner.selectedRecipes.reduce((sum, r) => sum + calculateRecipeMetrics(r).cookCost, 0),
    [planner.selectedRecipes],
  );
  const isOver = runningCost > planner.totalBudget;

  // Deck exhausted -> evaluate (original: renderActiveSwipeCard with no rec -> goToStep(5))
  useEffect(() => {
    if (!isLoading && !current) goToStep(5);
  }, [isLoading, current, goToStep]);

  const onDecision = useCallback(
    (direction: SwipeDirection) => {
      if (direction === 'right') {
        dispatch({ type: 'SWIPE_SELECT' });
        if (planner.selectedRecipes.length + 1 >= targetMealCount) {
          showToast('Target jumlah resep terpenuhi! Mengevaluasi budget...', 'success');
          goToStep(5);
        }
      } else {
        dispatch({ type: 'SWIPE_SKIP' });
      }
    },
    [dispatch, planner.selectedRecipes.length, targetMealCount, showToast, goToStep],
  );

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl animate-bounce">
          <i className="fa-solid fa-robot" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">AI Sedang Meracik Menu Kos Terbaik...</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto">Mencocokkan alat masak, memaksimalkan sisa bahan, dan menghitung estimasi harga pasar Yogyakarta.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-4 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-xs text-slate-500 block">Menu Terpilih</span>
          <span className="font-extrabold text-slate-900 text-base">
            <span className="text-emerald-600">{planner.selectedRecipes.length}</span> / {targetMealCount} Resep
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-500 block">Estimasi Biaya Terpakai</span>
          <span className="font-extrabold text-base">
            <span className={isOver ? 'text-rose-600' : 'text-emerald-700'}>{formatRupiah(runningCost)}</span>{' '}
            <span className="text-xs font-normal text-slate-400">/ {formatRupiah(planner.totalBudget)}</span>
          </span>
        </div>
      </div>

      <div className="relative max-w-md mx-auto">
        <div className="relative min-h-[430px] flex items-center justify-center">
          {current && <SwipeCard key={planner.currentSwipeIndex} ref={cardRef} recipe={current} onDecision={onDecision} />}
        </div>

        <div className="flex items-center justify-center gap-5 mt-5">
          <button onClick={() => cardRef.current?.decide('left')} title="Lewati Resep (Swipe Left)"
            className="w-14 h-14 rounded-full bg-white border-2 border-rose-200 text-rose-500 hover:bg-rose-50 hover:scale-105 shadow-md flex items-center justify-center text-xl transition">
            <i className="fa-solid fa-xmark" />
          </button>
          <button onClick={() => current && openRecipeModal(current.id)} title="Lihat Detail Resep"
            className="px-4 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm text-xs font-bold flex items-center gap-1.5 transition">
            <i className="fa-solid fa-circle-info text-emerald-600" /><span>Detail Resep</span>
          </button>
          <button onClick={() => cardRef.current?.decide('right')} title="Pilih Resep (Swipe Right)"
            className="w-14 h-14 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105 shadow-lg shadow-emerald-600/30 flex items-center justify-center text-xl transition">
            <i className="fa-solid fa-heart" />
          </button>
        </div>
        <p className="text-center text-xs text-slate-400 mt-3">
          Geser kartu ke <strong>kanan</strong> untuk memilih, ke <strong>kiri</strong> untuk melewati
        </p>
      </div>
    </div>
  );
}
