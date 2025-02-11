/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import CustomizedSwitches from './CustomizedSwitches';

const ThemeSettings = () => {
  const { setColor, currentColor, setThemeSettings } = useStateContext();

  return (
    <div
      className="bg-half-transparent w-screen fixed nav-item top-0 right-0"
    >
      <div
        className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400 wid100"
      >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <AiOutlineCloseCircle />
          </button>

        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">

          <CustomizedSwitches />
        </div>
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl ">Theme Colors</p>
          <div className="flex gap-3 flex-wrap">
            {themeColors.map((item) => (
              <div
                className="relative mt-2 cursor-pointer flex gap-5 items-center"
                key={item.name}
              >
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: item.color }}
                  onClick={() => setColor(item.color)}
                >
                  <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
