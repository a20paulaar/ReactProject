import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useCart from "../../customHooks/useCart";
import useProducts from "../../customHooks/useProducts";
import { useSelector } from "react-redux";
import { selectLoading, selectProducts } from "../../redux/slices/productsSlice";
import './ProductDetails.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const loading = useSelector(selectLoading);
    const products = useSelector(selectProducts);
    const product = products.find(product => product.id === productId);
    const { addToCart } = useCart();
    if(loading){
        console.log(productId);
        return <p>Loading product. . .</p>
    }
    console.log(products);
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