import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';
import avatar from '../data/avatar.webp';
import UserProfile from './UserProfile';
import Chat from './Chat';
import Notification from './Notification';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor, zIndex }) => (
  <Tooltip title={title} placement="bottom">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color, zIndex }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {dotColor && (
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
      )}
      {icon}
    </button>
  </Tooltip>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize(); // تحديث الحجم عند التحميل
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setActiveMenu(screenSize > 900);
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  // ✅ استخدام متغير بدلاً من ternary المتداخل
  let navbarWidth = '100%';
  if (screenSize > 1024) {
    navbarWidth = activeMenu ? 'calc(100% - 224px)' : '100%';
  }

  return (
    <div
      className="flex justify-between p-2 md:mr-6 fixed navbar bg-white dark:text-gray-200 dark:bg-secondary-dark-bg"
      style={{ width: navbarWidth }}
    >
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
        zIndex={screenSize > 1024 ? 0 : 'auto'}
      />

      <div className="flex">
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <Tooltip title="Profile" placement="bottom">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img className="rounded-full w-8 h-8" src={avatar} alt="user-profile" />
            <p className={`text-gray-400 text-14 ${screenSize < 640 ? 'hidden' : ''}`}>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </Tooltip>

        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
