import './Login.css';
import React from 'react';
import useLog from '../customHooks/useLog';

function Login() {
    const { isLoggedIn, handleLogin, handleLogout, userData } = useLog();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.loginName.value;
        const email = form.loginEmail.value;
        if (name && email){
            handleLogin({name, email});
            form.reset();
        } else {
            alert('Rellene todos los campos.');
        }
    };
  return(
      <div className='login-banner'>
          <form onSubmit={handleSubmit}>
              <label htmlFor="login-name">Nombre:</label>
              <input type="text" name="loginName"/>
              <label htmlFor="login-email">Email:</label>
              <input type="text" name='loginEmail'/>
              {!isLoggedIn && <button type='submit' className='login-button'>Login</button>}
          </form>
          {isLoggedIn && <div className='logout-data'>
                <button onClick={handleLogout}>Logout</button>
                <p>¿Quieres cerrar sesión, {userData.name}?</p>
            </div>}
      </div>
    )
}

export default Login;

