
import React, { useState } from 'react';  
import ProductList from './ProductList/ProductList.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';


function App() {
  const [filtro, setFiltro] = useState();

  return(
    <>
      <Header onFilterChange={setFiltro}/>
      <ProductList filtro={filtro}/>
      <Footer/>
    </>
  );

}

export default App;
