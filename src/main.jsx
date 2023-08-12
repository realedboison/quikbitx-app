import '/src/index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
// CARD PROVIDER
import CardProvider from './contexts/CardContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
// SIDEBAR CONTEXT
import SidebarProvider from './contexts/SidebarContext';

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <SidebarProvider>
    <CardProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </CardProvider>
  </SidebarProvider>
);
