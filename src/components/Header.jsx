import React from 'react';

const Header = ({ title }) => (
  <div className=" mb-6">
    <p className=" dark:text-gray-200 text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

export default Header;
