import React, { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';

// ✅ تحميل الصفحات بشكل Lazy لتحسين الأداء
const Ecommerce = lazy(() => import('./pages/Ecommerce'));
const Orders = lazy(() => import('./pages/Orders'));
const Employees = lazy(() => import('./pages/Employees'));
const Customers = lazy(() => import('./pages/Customers'));
const Kanban = lazy(() => import('./pages/Kanban'));
const Editor = lazy(() => import('./pages/Editor'));
const Calendar = lazy(() => import('./pages/Calendar'));
const ColorPicker = lazy(() => import('./pages/ColorPicker'));
const Line = lazy(() => import('./pages/Charts/Line'));
const Area = lazy(() => import('./pages/Charts/Area'));
const Bar = lazy(() => import('./pages/Charts/Bar'));
const Pie = lazy(() => import('./pages/Charts/Pie'));
const Financial = lazy(() => import('./pages/Charts/Financial'));
const ColorMapping = lazy(() => import('./pages/Charts/ColorMapping'));
const Pyramid = lazy(() => import('./pages/Charts/Pyramid'));
const Stacked = lazy(() => import('./pages/Charts/Stacked'));

const AppLayout = () => {
  const {
    setCurrentColor, setCurrentMode, currentMode, activeMenu,
    currentColor, themeSettings, setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    setCurrentColor(localStorage.getItem('colorMode') || '#1A97F5');
    setCurrentMode(localStorage.getItem('themeMode') || 'Light');
  }, [setCurrentColor, setCurrentMode]);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* زر الإعدادات */}
        <div className="fixed right-4 bottom-4 z-[1000]">
          <Tooltip title="Settings" placement="top-end">
            <button
              type="button"
              onClick={() => setThemeSettings((prev) => !prev)} // ✅ التبديل بين الفتح والإغلاق
              style={{ background: currentColor, borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>

        {/* الشريط الجانبي */}
        {activeMenu && (
          <div className="w-56 fixed sidebar dark:bg-secondary-dark-bg bg-white transition-all duration-200 z-10">
            <Sidebar />
          </div>
        )}

        {/* المحتوى الرئيسي */}
        <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'lg:ml-56' : ''}`}>
          <Navbar />
          {themeSettings && <ThemeSettings />} {/* ✅ استخدام themeSettings فعليًا */}
          <Suspense fallback={<div className="text-center mt-10">⏳ Loading...</div>}>
            <Routes>
              <Route path="/" element={<Ecommerce />} />
              <Route path="/admin_dashboard" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
