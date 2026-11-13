import HeroBanner from '../components/home/HeroBanner';
import RecipeGrid from '../components/home/RecipeGrid';
import SavedPlansSection from '../components/home/SavedPlansSection';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <HeroBanner />
      <SavedPlansSection />
      <RecipeGrid />
    </div>
  );
}
