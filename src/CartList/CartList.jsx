import './ProductList.css';
import CartProduct from './CartProduct.jsx';


function CartList({cart}) {
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
  return(
      <>
      <div className='cart-products-list'>
        {cart.map((product) => (
          <CartProduct
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
            
          />
        ))}
      </div>
      <p>Total: ${totalPrice}</p>
      </>
);

}

export default CartList;
