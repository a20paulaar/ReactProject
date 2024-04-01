
import React, { useState } from 'react';  
import ProductList from './ProductList/ProductList.jsx';
import CartList from './CartList/CartLIST.JSX';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Login from './Login/Login.jsx';


function App() {
  const [filtro, setFiltro] = useState();
  const [darkMode, setDarkMode] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const handleToggleCart = () => {
    setShowCart(!showCart);
  };
  return(
    <>
      <Header onFilterChange={setFiltro} onDarkModeChange={setDarkMode} onToggleCart={handleToggleCart}/>
      { showCart ? <CartList/> : <ProductList filtro={filtro}/> }
      <Login/>
      <Footer darkMode={darkMode}/>
    </>
  );

}

export default App;
