import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import {ThemeProvider} from './context/ThemeContext.jsx';
import {CartProvider} from './context/CartContext.jsx';
import {LogProvider} from './context/LogContext.jsx';
import { FilterProvider } from './context/FilterContext.jsx';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import store from './redux/store.js';
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <LogProvider>
          <CartProvider>
            <FilterProvider>
              <RouterProvider router={App} />
            </FilterProvider>
          </CartProvider>
        </LogProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
