import '/src/index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
// CARD PROVIDER
import CardProvider from './contexts/CardContext';
import FavoriteProvider from './contexts/FavoriteContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
// SIDEBAR CONTEXT
import SidebarProvider from './contexts/SidebarContext';

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <SidebarProvider>
    <FavoriteProvider>
      <CardProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </CardProvider>
    </FavoriteProvider>
  </SidebarProvider>
);
