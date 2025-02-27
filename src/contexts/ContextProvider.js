import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(null);
  const [currentColor, setCurrentColor] = useState(localStorage.getItem('colorMode') || '#22c55e');
  const [currentMode, setCurrentMode] = useState(localStorage.getItem('themeMode') || 'Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('themeMode', currentMode);
  }, [currentMode]);

  useEffect(() => {
    localStorage.setItem('colorMode', currentColor);
  }, [currentColor]);

  const setMode = (e) => setCurrentMode(e.target.value);
  const setColor = (color) => setCurrentColor(color);
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  // ✅ تحسين الأداء باستخدام useMemo لمنع إعادة إنشاء الكائن في كل إعادة تصيير
  const contextValue = useMemo(() => ({
    currentColor,
    currentMode,
    activeMenu,
    screenSize,
    setScreenSize,
    handleClick,
    isClicked,
    initialState,
    setIsClicked,
    setActiveMenu,
    setCurrentColor,
    setCurrentMode,
    setMode,
    setColor,
    themeSettings,
    setThemeSettings,
  }), [currentColor, currentMode, activeMenu, screenSize, isClicked, themeSettings]);

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
