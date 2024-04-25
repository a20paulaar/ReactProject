import './Footer.css';

function Footer({darkMode}){
    return(
        <>
        <footer className={darkMode ? 'dark-mode' : 'light-mode'}>
            <div id='footer-main'>
                <ul id='contact'>
                    <li>Contacto</li>
                    <li>Email: info@mitienda.com</li>
                    <li>Teléfono: +34 123 456 789</li>
                </ul>
                <ul id='social'>
                    <li>Redes Sociales</li>
                    <li><a href='#'>Facebook</a></li>
                    <li><a href='#'>Twitter</a></li>
                    <li><a href='#'>Instagram</a></li>
                </ul>
                <ul id='address'>
                    <li>Dirección</li>
                    <li>Calle Principal, 123</li>
                    <li>Ciudad, País</li>
                </ul>
            </div>
            <div id='footer-copyright'>&#169; 2023 MiTienda. Todos los derechos reservados.</div>
        </footer>
        </>
    )
}

export default Footer;