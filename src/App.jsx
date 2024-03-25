
import React, { useState } from 'react';
import ProductList from './ProductList/ProductList.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';


function App() {
  const [filter, setFilter] = useState('');

  return(
    <>
      <Header onFilterChange={setFilter}/>
      <ProductList filter={filter}/>
      <Footer/>
    </>
  );

}

export default App;
