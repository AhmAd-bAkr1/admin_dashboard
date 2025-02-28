import React, { useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { IoMdCloseCircle } from 'react-icons/io';
import Tooltip from '@mui/material/Tooltip';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  // دالة لإغلاق الشريط الجانبي عندما يكون حجم الشاشة أقل من 900 بكسل
  const handleCloseSideBar = () => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // إعداد الـ classNames في متغيرات لتقليل التكرار
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 primarycolor';

  // تحسين الأداء باستخدام useMemo إذا كانت روابط القائمة كبيرة
  const memoizedLinks = useMemo(() => links, [links]);

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/ecommerce"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>

            {/* زر إغلاق الشريط الجانبي يظهر فقط على الشاشات الأصغر */}
            <Tooltip title="Close sidebar" placement="bottom">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)} // التبديل بين إظهار واخفاء الشريط الجانبي
                aria-label="Close sidebar" // إضافة خاصية الوصول
                aria-expanded={activeMenu ? 'true' : 'false'} // الحالة عند التوسيع أو الإغلاق
                style={{ color: currentColor }}
                className={`text-3xl rounded-full hover:bg-light-gray mt- ml-3 relative top-3 right-3 z-50 bg-white ${screenSize > 1024 ? 'hidden' : ''}`}
              >
                <IoMdCloseCircle />
              </button>
            </Tooltip>
          </div>

          <div className="mt-10">
            {memoizedLinks.map((item, index) => (
              <div key={index}> {/* يمكن استخدام index هنا إذا لم يكن هناك فريدة قيمة واضحة */}
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase primarycolor">
                  {item.title}
                </p>
                {item.links.map((link) => {
                  // دمج item.title مع link.name كـ key فريد
                  const linkKey = `${item.title}-${link.name}`;

                  return (
                    <NavLink
                      to={`/${link.name}`}
                      key={linkKey}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : '',
                      })}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            ))}
          </div>

        </>
      )}
    </div>
  );
};

export default Sidebar;
