import './CartList.css';
import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import useCart from '../../customHooks/useCart';

function CartList() {
  const { cartItems, clearCart } = useCart();
  const groupCartItems = cartItems.reduce((acc, product) => {
    if(!acc[product.id]){
      acc[product.id] = {...product, count:1};
    } else {
      acc[product.id].count++;
    }
    return acc;
  }, {});

  const uniqueItems = Object.values(groupCartItems);

  const totalPrice = uniqueItems.reduce((acc, product) => acc + product.price * product.count, 0);

  const handleBuy = () => {
    alert('Vas a ser redirigido a la pasarela de pagos.');
    clearCart();
  }
  return(
      <>
      <h2 className='cart-title'>Carrito de Compras</h2>
      <div className='cart-products-list'>
        {uniqueItems.map((product) => (
          <CartProduct
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            quantity={product.count}
            
          />
        ))}
      </div>
      {cartItems.length == 0 && <h3 className='cart-empty-text'>El carrito está vacío</h3>}
      <p className='total-price-list'>Total a pagar: ${totalPrice}</p>
      {cartItems.length > 0 && <div className='cart-buttons-container'>
        <button className='button-buy-cart' onClick={handleBuy}>Comprar</button>
        <button className='button-empty-cart' onClick={() => clearCart()}>Vaciar carrito</button>
      </div>}
      </>
);

}

export default CartList;
