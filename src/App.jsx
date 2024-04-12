import React, { useState } from 'react';  
import ProductList from './ProductList/ProductList.jsx';
import CartList from './CartList/CartLIST.JSX';
import useTheme from './customHooks/useTheme.js';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Login from './Login/Login.jsx';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import NotFound from './NotFound/NotFound.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const {darkMode} = useTheme();
  return(
      <div className={darkMode ? 'dark-mode' : ''}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/login" element={<Login/>} />
              {/*<ProtectedRoute>*/}
                <Route path="/cart" element={<CartList/>} />
                <Route path="/products/:productId" element={<ProductDetails/>}/>
              {/*</ProtectedRoute>*/}
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
  );

}

export default App;
