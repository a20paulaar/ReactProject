import React, { useState } from 'react';  
import ProductList from './ProductList/ProductList.jsx';
import CartList from './CartList/CartLIST.JSX';
import useTheme from './customHooks/useTheme.js';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Login from './Login/Login.jsx';


function App() {
  const [filtro, setFiltro] = useState('');
  const {darkMode} = useTheme();
  const [showCart, setShowCart] = useState(false);
  const handleToggleCart = () => {
    setShowCart(true);
  };
  const handleShowProducts = () => {
    setShowCart(false);
  }
  return(
    <div className={darkMode ? 'dark-mode' : ''}>
      <Header onFilterChange={setFiltro} onToggleCart={handleToggleCart} onShowProducts={handleShowProducts}/>
      { showCart ? <CartList/> : <ProductList filtro={filtro}/> }
      <Login/>
      <Footer/>
    </div>
  );

}

export default App;
