import './ProductList.css';
import Product from '../Product/Product.jsx';
//import data from '../../../data/db.json';
import useFilter from '../../customHooks/useFilter.js';
import useLog from '../../customHooks/useLog.js';
import AddProduct from '../AddProduct/AddProduct.jsx';
import { useState, useEffect } from 'react';
//import useProducts from '../../customHooks/useProducts.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, selectProducts } from '../../redux/slices/productsSlice.js';
import { getProductsThunk } from '../../redux/thunks/productsThunks.js';
function ProductList() {
  const { filtro } = useFilter();
  const { userData } = useLog();
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const { products, loading, addProduct } = useProducts();
  const dispatch = useDispatch();

  const productsList = useSelector(selectProducts);
  useEffect(() => {
    dispatch(getProductsThunk())
  }, [productsList]);
  console.log(filtro);
  const loading = useSelector(selectLoading);
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
      />}
      {loading ? <div>Loading products</div> : 
        <div className='main-products-list'>
        {productsList.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
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
