import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
    const { productid } = useParams();
    return(
        <div className="product-details-card">
            <Link to="/">Volver</Link>
            <div className="product-details-img">

            </div>
            <div className="product-details-body">
                <ul>
                    <li>Id del producto: {productid}</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default ProductDetails;