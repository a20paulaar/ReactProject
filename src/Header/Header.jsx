import './Header.css';
import React, {useState, useEffect} from 'react';
import circleIcon from '../assets/circle-half-stroke-solid.svg';
import cartIcon from '../assets/cart-shopping-solid.svg';
import heartIcon from '../assets/heart-regular.svg';
import userIcon from '../assets/user-regular.svg';

function Header( { onFilterChange, onDarkModeChange, onToggleCart } ){
    const [filterText, setFilterText] = useState();
    const handleInputChange = (e) => {
        const newText = e.target.value;
        setFilterText(newText);
        onFilterChange(newText);
    }
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        onDarkModeChange(!darkMode);
    };
    const [userData, setUserData] = useState(null);
    useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem('userData'));
    if (savedUserData) {
      setUserData(savedUserData);
    }
  }, []);
    return(
        <>
            <header>
                <div className={`header-main-bar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
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
                        <img onClick={toggleDarkMode} src={circleIcon}/>
                        <img onClick={onToggleCart} src={cartIcon}/>
                        <img src={heartIcon}/>
                        <img src={userIcon}/>
                    </div>
                </div>
                <div className='header-secondary-bar'>
                    <div className='header-discount-banner'> {userData ? <p>¡{userData.user}, aprovéchate de tu 20% de descuento!</p> : <p>Crea una cuenta para disfrutar de nuestros descuentos</p>}</div>
                </div>
            </header>
        </>
    )
}

export default Header;