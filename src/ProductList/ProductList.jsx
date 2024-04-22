import './ProductList.css';
import Product from '../Product/Product.jsx';
import data from '../../data/db.json';
import useFilter from '../customHooks/useFilter.js';
import useLog from '../customHooks/useLog.js';
import AddProduct from '../AddProduct/AddProduct.jsx';
import { useState } from 'react';
import useProducts from '../customHooks/useProducts.js';

function ProductList() {
  const { filtro } = useFilter();
  const { userData } = useLog();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { products, loading, addProduct } = useProducts();
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  /*const filteredProducts = data.filter((product) => {
      product.title.toLowerCase().includes(filtro.toLowerCase())
  });*/

  return(
      <>
      {isModalOpen && <AddProduct
      closeModal={closeModal}
      addProduct={addProduct}
      />}
      {loading ? <div>Loading products</div> : 
        <div className='main-products-list'>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            desc={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      }
      
      {userData.role == 'admin' && <button className='product-admin-add-new' onClick={openModal}>Añadir nuevo producto</button>}
      </>
);

}

export default ProductList;
