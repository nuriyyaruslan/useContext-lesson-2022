import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppCounterContext } from './contexts/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppCounterContext>
      <App />
    </AppCounterContext>
  </React.StrictMode>
);
