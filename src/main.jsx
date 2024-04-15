import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import {ThemeProvider} from './context/ThemeContext.jsx';
import {CartProvider} from './context/CartContext.jsx';
import {LogProvider} from './context/LogContext.jsx';
import { FilterProvider } from './context/FilterContext.jsx';
import { RouterProvider } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LogProvider>
        <CartProvider>
          <FilterProvider>
            <ProductsProvider>
              <RouterProvider router={App} />
            </ProductsProvider>
          </FilterProvider>
        </CartProvider>
      </LogProvider>
    </ThemeProvider> 
  </React.StrictMode>
)
