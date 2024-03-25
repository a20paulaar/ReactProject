import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(){
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
                    <input type='text' name='header-searchbar' id='header-searchbar' placeholder='Buscar productos'/>
                    <div className='icons'>
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                        <FontAwesomeIcon icon="fa-regular fa-heart" />
                        <FontAwesomeIcon icon="fa-regular fa-user" />
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