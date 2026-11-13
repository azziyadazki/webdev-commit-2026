import { useMemo, useState } from 'react';
import { RECIPES_DB } from '../../data/recipes';
import { ALL_CATEGORY } from '../../lib/constants';
import RecipeCard from '../recipe/RecipeCard';
import CategoryFilter from './CategoryFilter';

export default function RecipeGrid() {
  const [category, setCategory] = useState(ALL_CATEGORY);

  const categories = useMemo(() => [ALL_CATEGORY, ...new Set(RECIPES_DB.map((r) => r.category))], []);
  const filtered = category === ALL_CATEGORY ? RECIPES_DB : RECIPES_DB.filter((r) => r.category === category);

  return (
    <div id="resep-section" className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Resep Rekomendasi</h2>
          <p className="text-sm text-slate-500 mt-1">Menu hemat terverifikasi untuk mahasiswa Yogyakarta lengkap dengan hitungan penghematan.</p>
        </div>
        <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((r) => <RecipeCard key={r.id} recipe={r} />)}
      </div>
    </div>
  );
}
