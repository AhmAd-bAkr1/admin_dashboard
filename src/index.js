import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider'; // تأكد من المسار الصحيح
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
);
