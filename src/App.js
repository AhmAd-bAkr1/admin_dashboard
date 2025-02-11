import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; // استيراد المكونات الجديدة
import { FiSettings } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const AppLayout = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>

      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <Tooltip title="Settings" placement="top-end">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>
        {activeMenu ? (

          <div
            className="w-56 fixed sidebar dark:bg-secondary-dark-bg secondary-color z-10 f-height bg-white"
            style={{
              transition: 'width 0.2s ease', // إضافة تأثير التبديل (اختياري)
            }}
          >
            <Sidebar />
          </div>

        ) : (
          <div
            className="w-0 dark:bg-secondary-dark-bg "
          >
            <Sidebar />
          </div>
        )}
        <div
          className={activeMenu
            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen lg:ml-56 w-full  shadow-none'
            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2  shadow-none'}
        >

          <Navbar />

          <div>
            {themeSettings && (<ThemeSettings />)}
            <Outlet /> {/* يتم استخدام Outlet لعرض المكونات الفرعية */}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

// تعريف المسارات
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // المكون الرئيسي الذي يحتوي على الهيكل العام
    children: [
      {
        path: '/admin_dashboard',
        element: <Ecommerce />,
      },
      {
        path: '/ecommerce',
        element: <Ecommerce />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/employees',
        element: <Employees />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/kanban',
        element: <Kanban />,
      },
      {
        path: '/editor',
        element: <Editor />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      {
        path: '/color-picker',
        element: <ColorPicker />,
      },
      {
        path: '/line',
        element: <Line />,
      },
      {
        path: '/area',
        element: <Area />,
      },
      {
        path: '/bar',
        element: <Bar />,
      },
      {
        path: '/pie',
        element: <Pie />,
      },
      {
        path: '/financial',
        element: <Financial />,
      },
      {
        path: '/color-mapping',
        element: <ColorMapping />,
      },
      {
        path: '/pyramid',
        element: <Pyramid />,
      },
      {
        path: '/stacked',
        element: <Stacked />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
