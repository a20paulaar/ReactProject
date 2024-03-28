import './Header.css';
import React, {useState} from 'react';
import cartIcon from '../assets/cart-shopping-solid.svg';
import heartIcon from '../assets/heart-regular.svg';
import userIcon from '../assets/user-regular.svg';

function Header( { onFilterChange } ){
    const [filterText, setFilterText] = useState();
    const handleInputChange = (e) => {
        const newText = e.target.value;
        setFilterText(newText);
        onFilterChange(newText);
    }
    return(
        <>
            <header>
                <div className='header-main-bar'>
                    <h2>MiTienda</h2>
                    <ul>
                        <li><a href='#'>INICIO</a></li>
                        <li><a href='#'>CATEGORÍAS</a></li>
                        <li><a href='#'>OFERTAS</a></li>
                        <li><a href='#'>CONTACTO</a></li>
                    </ul>
                    <div className='header-searchbar'>
                        <input type='text' value={filterText} placeholder='Buscar productos'onChange={handleInputChange}/>
                    </div>
                    <div className='icons'>
                        <img src={cartIcon}/>
                        <img src={heartIcon}/>
                        <img src={userIcon}/>
                    </div>
                </div>
                <div className='header-secondary-bar'>
                    <div className='header-discount-banner'> ¡20% de descuento para nuevos clientes!</div>
                </div>
            </header>
        </>
    )
}

export default Header;