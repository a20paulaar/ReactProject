import './Header.css';
import React, {useState} from 'react';
import circleIcon from '../assets/circle-half-stroke-solid.svg';
import cartIcon from '../assets/cart-shopping-solid.svg';
import heartIcon from '../assets/heart-regular.svg';
import userIcon from '../assets/user-regular.svg';
import useCart from '../customHooks/useCart.js';
import useTheme from '../customHooks/useTheme';
import useLog from '../customHooks/useLog';

function Header( { onFilterChange, onToggleCart, onShowProducts } ){
    const [filterText, setFilterText] = useState();
    const handleInputChange = (e) => {
        const newText = e.target.value;
        setFilterText(newText);
        onFilterChange(newText);
    }
    const { changeTheme } = useTheme();
    const { cartList } = useCart();
    const { userData } = useLog();
    return(
        <>
            <header>
                <div className='header-main-bar'>
                    <h2 onClick={onShowProducts}>MiTienda</h2>
                    <ul>
                        <li><a href='#'>INICIO</a></li>
                        <li><a href='#'>CATEGORÍAS</a></li>
                        <li><a href='#'>OFERTAS</a></li>
                        <li><a href='#'>CONTACTO</a></li>
                    </ul>
                    <div className='header-searchbar'>
                        <input type='text' value={filterText} placeholder='Buscar productos'onChange={handleInputChange}/>
                    </div>
                    <ul className='icons'>
                        <li>
                            <img onClick={() => changeTheme()} src={circleIcon}/>
                        </li>
                        <li>
                            <img onClick={onToggleCart} src={cartIcon}/>
                            {cartList > 0 && <p className='cart-badge'>{cartList.length}</p>}
                            
                        </li>
                        <li>
                            <img src={heartIcon}/>
                        </li>
                        <li>
                            <img src={userIcon}/>
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