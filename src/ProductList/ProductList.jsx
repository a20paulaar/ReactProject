import './ProductList.css';
import Product from './Product/Product.jsx';
import data from '../data.json';


function ProductList({ filter }) {
    const products = data.filter((product) => {
        product.title.toLowerCase().includes(filter.toLowerCase());
    })
  return(
      <>
      <div className='main-products-list'>
        {products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            desc={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
      </>
);

}

export default ProductList;
