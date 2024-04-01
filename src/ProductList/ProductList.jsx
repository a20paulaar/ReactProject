import './ProductList.css';
import Product from '../Product/Product.jsx';
import data from '../../data.json';
import React, { useState } from 'react';

function ProductList({ filtro }) {
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
    /*const products = data.filter((product) => {
        product.title.toLowerCase().includes(filtro.toLowerCase())
    });*/
  return(
      <>
      <div className='main-products-list'>
        {data.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            desc={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating}
            onClick={handleAddToCart}
          />
        ))}
      </div>
      </>
);

}

export default ProductList;
