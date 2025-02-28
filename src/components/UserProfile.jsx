import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import Button from './Button';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.webp';

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item fixed right-1 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-full md:w-96  max-w-full lg:max-w-screen-lg overflow-auto max-h-screen">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>

      <div className="flex flex-row gap-5 items-center border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24 sm:h-28 sm:w-28"
          src={avatar}
          alt="user-profile"
        />
        <div className="text-center sm:text-left">
          <p className="font-semibold text-xl dark:text-gray-200">Michael Roberts</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">Administrator</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">info@shop.com</p>
        </div>
      </div>

      <div className="mt-6">
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default UserProfile;
