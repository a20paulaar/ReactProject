
import './App.css';
import Product from './Product/Product.jsx';
import data from '../data.json';


function App() {
  return(
      <>
      <div className='main-products-list'>
        {data.map((product, index) => (
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

export default App;
