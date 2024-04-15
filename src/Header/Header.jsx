import './Header.css';
import React from 'react';
import circleIcon from '../assets/circle-half-stroke-solid.svg';
import cartIcon from '../assets/cart-shopping-solid.svg';
import heartIcon from '../assets/heart-regular.svg';
import userIcon from '../assets/user-regular.svg';
import useCart from '../customHooks/useCart.js';
import useTheme from '../customHooks/useTheme';
import useLog from '../customHooks/useLog';
import { Link } from 'react-router-dom';
import useFilter from '../customHooks/useFilter.js';


function Header(){
    const { filtro, changeFilter } = useFilter();
    const { changeTheme } = useTheme();
    const { cartItems } = useCart();
    const { userData } = useLog();

    const handleInputChange = (e) => {
        const newText = e.target.value;
        changeFilter(newText);
    }

    return(
        <>
            <header>
                <div className='header-main-bar'>
                    <h2><Link to="/">MiTienda</Link></h2>
                    <ul>
                        <li><Link to='/'>INICIO</Link></li>
                        <li><Link href='#'>CATEGORÍAS</Link></li>
                        <li><Link href='#'>OFERTAS</Link></li>
                        <li><Link href='#'>CONTACTO</Link></li>
                    </ul>
                    <div className='header-searchbar'>
                        <input type='text' value={filtro} placeholder='Buscar productos'onChange={handleInputChange}/>
                    </div>
                    <ul className='icons'>
                        <li>
                            <img onClick={() => changeTheme()} src={circleIcon}/>
                        </li>
                        <li className='cart-list-item'>
                            {cartItems.length > 0 ? <p className='cart-badge'>{cartItems.length}</p> : ''}
                            <Link to="/cart"><img src={cartIcon}/></Link>                          
                        </li>
                        <li>
                            <img src={heartIcon}/>
                        </li>
                        <li>
                            <Link to="/login"><img src={userIcon}/></Link>
                        </li>
                    </ul>
                </div>
                <div className='header-secondary-bar'>
                    <div className='header-discount-banner'> {userData.name ? <p>¡{userData.name}, aprovéchate de tu 20% de descuento!</p> : <p>Crea una cuenta para disfrutar de nuestros descuentos</p>}</div>
                </div>
            </header>
        </>
    )
}

export default Header;