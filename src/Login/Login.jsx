import './Login.css';
import { useState, useEffect } from 'react';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({ name: '', email: '' });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
    const savedUserData = JSON.parse(localStorage.getItem('userData'));
    if (savedUserData) {
      setUserData(savedUserData);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    const userDataToSave = { name, email };
    localStorage.setItem('userData', JSON.stringify(userDataToSave));
    setUserData(userDataToSave);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    setUserData({ name: '', email: '' });
  };

  const handleSubmit = () => {
    isLoggedIn ? handleLogout : handleLogin;
  };

    return(
        <div className='login-banner'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="login-name">Nombre:</label>
                <input type="text" name="login-name" onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="login-email">Email:</label>
                <input type="text" name='login-email'onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' className='login-button'>{isLoggedIn ? 'Logout' : 'Login'}</button>
                {isLoggedIn ? <p>¿Quieres cerrar sesión, ${name}?</p> : ''}
            </form>
        </div>
    )
}

export default Login;

