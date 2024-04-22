import './Product.css';
import useCart from '../customHooks/useCart.js';
import useLog from '../customHooks/useLog.js';
import deleteIcon from '../assets/trash-solid.svg';
import editIcon from '../assets/pencil-solid.svg';
import useProducts from '../customHooks/useProducts.js';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ModifyProduct from '../ModifyProduct/ModifyProduct.jsx';

const Product = (props) => {
    const { addToCart } = useCart();
    const { isLogged, userData } = useLog();
    const {deleteProduct, modifyProduct} = useProducts();
    const {id, title, price, desc, image, rating} = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(props);
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return(
        <>
            {isModalOpen && <ModifyProduct closeModal={closeModal} modifyProduct={modifyProduct} product={props}/>}
            <div className='product-card' id={id}>
                <Link to={`/products/${id}`}><div className='product-img' style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover'}}></div></Link>
                {userData.role =='admin' && 
                <div className='product-icons-admin'>
                    <img src={editIcon} onClick={openModal}/>
                    <img src={deleteIcon} onClick={() => deleteProduct(id)}/>
                </div>}
                <div className='product-title'>{title} {id}</div>
                <p className='product-description'>{desc}</p>
                <p className='product-rating'>Rating: {rating.rate} ({rating.count} reviews)</p>
                <p className='product-price-tag'>&#36; {price}</p>
                {isLogged && <button className='product-add-to-cart' onClick={() => addToCart(props)}>Agregar al carrito</button>}
            </div>
        </>
    )
}

export default Product;

