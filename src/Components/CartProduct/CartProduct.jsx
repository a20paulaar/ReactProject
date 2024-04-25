import './CartProduct.css';

const CartProduct = (props) => {
    return(
        <div className='cart-product-card'>
            <div className='cart-product-icon' style={{ backgroundImage: `url('${props.image}')`, backgroundSize: 'cover', width:'200px', height:'200px'}}>
                <div className='cart-product-badge'>{props.quantity}</div>
            </div>
            <div className='cart-product-details'>
                <div className='cart-product-title'>{props.title}</div>
                <div className='cart-product-price-unity'>Precio por unidad: &#36;{props.price}</div>
                <div className='cart-product-total'>Precio total: ${props.price*props.quantity}</div>
            </div>
        </div>
    )
}

export default CartProduct;

