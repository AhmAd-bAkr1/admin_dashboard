/* eslint-disable react/no-deprecated */
import React from 'react';
// import ReactDOM from 'react-dom/client'; // ✅ Correct import
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';

import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
