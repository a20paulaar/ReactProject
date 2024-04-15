import React from "react";
import { useParams, Link } from "react-router-dom";
import useCart from "../customHooks/useCart";
import data from '../../data/db.json';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const product = data.find((product) => product.id === parseInt(productId));
    const { addToCart } = useCart();
    if(!product){
        console.log(productId);
        return <p>Loading product. . .</p>
    }
    return(
        <div className="product-details-card">
            <Link to="/">Volver</Link>
            <div className="product-details-img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details-body">
                <h2 className="product-details-title">{product.title}</h2>
                <ul>
                    <li className="product-details-price">&#36;{product.price}</li>
                    <li className="product-details-desc">{product.description}</li>
                    <li className="product-details-categ">Category: {product.category}</li>
                    <li className="product-details-button"><button className='product-add-to-cart' onClick={() => addToCart(product)}>Agregar al carrito</button></li>
                </ul>
            </div>
        </div>
    );
};

export default ProductDetails;