import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { PlannerProvider } from './context/PlannerContext';
import { RecipeModalProvider } from './context/RecipeModalContext';
import { SavedPlansProvider } from './context/SavedPlansContext';
import { ToastProvider } from './context/ToastContext';
import HomePage from './pages/HomePage';
import PlannerPage from './pages/PlannerPage';
import SavedPlanDetailPage from './pages/SavedPlanDetailPage';

/** Replaces the scrollTo(0) the original did inside navigateTo(). */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <SavedPlansProvider>
          <PlannerProvider>
            <RecipeModalProvider>
              <ScrollToTop />
              <Routes>
                <Route element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="planner" element={<PlannerPage />} />
                  <Route path="saved/:id" element={<SavedPlanDetailPage />} />
                  <Route path="*" element={<HomePage />} />
                </Route>
              </Routes>
            </RecipeModalProvider>
          </PlannerProvider>
        </SavedPlansProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}
