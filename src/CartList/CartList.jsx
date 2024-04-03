import './CartList.css';
import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import useCart from '../customHooks/useCart';

function CartList() {
  const { cartProducts } = useCart();
  const groupCartItems = cartProducts.reduce((acc, product) => {
    if(!acc[product.id]){
      acc[product.id] = {...product, count:1};
    } else {
      acc[product.id].count++;
    }
    return acc;
  }, {});

  const uniqueItems = Object.values(groupCartItems);

  const totalPrice = uniqueItems.reduce((acc, product) => acc + product.price * product.count, 0);

  return(
      <>
      <h2>Carrito de Compras</h2>
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
      <p>Total: ${totalPrice}</p>
      </>
);

}

export default CartList;
