import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ToastContainer from './ToastContainer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ToastContainer />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
