import './Login.css';
import React from 'react';
import useLog from '../customHooks/useLog';

function Login() {
    const { isLogged, handleLogin, handleLogout, userData } = useLog();
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
    <div className='login-container'>
      <div className='login-banner'>
          <form onSubmit={handleSubmit}>
              <label htmlFor="loginName">Nombre:</label>
              <input type="text" name="loginName"/>
              <label htmlFor="loginEmail">Email:</label>
              <input type="text" name='loginEmail'/>
              {!isLogged && <button type='submit' className='login-button'>Login</button>}
          </form>
          {isLogged && <div className='logout-data'>
                <button onClick={handleLogout}>Logout</button>
                <p>¿Quieres cerrar sesión, {userData.name}?</p>
            </div>}
      </div>
    </div>
    )
}

export default Login;

