import './ProductList.css';
import Product from '../Product/Product.jsx';
import data from '../../data.json';
import useFilter from '../customHooks/useFilter.js';

function ProductList() {
  const { filter } = useFilter();
    const products = data.filter((product) => {
        product.title.toLowerCase().includes(filter.toLowerCase())
    });
  return(
      <>
      <div className='main-products-list'>
        {data.map((product) => (
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
      </>
);

}

export default ProductList;
