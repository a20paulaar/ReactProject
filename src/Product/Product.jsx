import './Product.css';
import useCart from '../customHooks/useCart.js';
import useLog from '../customHooks/useLog.js';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { addToCart } = useCart();
    const { isLogged } = useLog();
    const {id, title, price, desc, image, rating} = props;
    return(
        <div className='product-card' id={id}>
            <Link to={`/products/${id}`}><div className='product-img' style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover'}}></div></Link>
            <div className='product-title'>{title}</div>
            <p className='product-description'>{desc}</p>
            <p className='product-rating'>Rating: {rating.rate} ({rating.count} reviews)</p>
            <p className='product-price-tag'>&#36; {price}</p>
            {isLogged ? <button className='product-add-to-cart' onClick={() => addToCart(props)}>Agregar al carrito</button> : ''}
        </div>
    )
}

export default Product;

