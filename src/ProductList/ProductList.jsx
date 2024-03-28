import './ProductList.css';
import Product from '../Product/Product.jsx';
import data from '../../data.json';


function ProductList({ filtro }) {
    const products = data.filter((product) => {
        product.title.toLowerCase().includes(filtro.toLowerCase())
    });
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
          />
        ))}
      </div>
      </>
);

}

export default ProductList;
