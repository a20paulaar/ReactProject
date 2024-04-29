import './Login.css';
import React from 'react';
import useLog from '../../customHooks/useLog';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, Link } from 'react-router-dom';

function Login() {
    const { isLogged, handleLogin, handleLogout, userData } = useLog();
    const { register, handleSubmit, watch, formState : {errors}, clearErrors, setError, reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const onSubmit = handleSubmit(() => {
        const name = watch('name');
        const email = watch('email');
        handleLogin({name, email});
        reset();
        navigate(location.state.pathname);
    });
    const handleLogouts = () => {
        handleLogout();
        navigate('/');
    }
    const handlePasswordValidation = () => {
        if (errors.loginPassword){
            clearErrors();
        }
        const password = watch('password');
        const repeatPassword = watch('repeatPassword');

        if (password.length < 6){
            setError('password', { message: 'La contraseña debe tener al menos 6 caracteres.'});
        }

        if(password !== repeatPassword){
            setError('repeatPassword', { message: 'Las contraseñas no coinciden. '});
        }

        if (password === repeatPassword){
            clearErrors();
        }
    }
  return(
    <div className='login-container'>
      <div className='login-banner'>
        <Link to="/">Volver</Link>
          <form onSubmit={onSubmit}>
              <label htmlFor="name">Nombre:</label>
              <input type="text" name="name" {... register('name', {
                required: 'Por favor, introduzca su nombre.',
                minLength: { value: 3, message: 'El nombre es demasiado corto.'},
                maxLength: { value: 40, message: 'El nombre es demasiado largo.'}
              }) }/>
              {errors.name && <span className='login-errors'>{errors.name.message}</span>}
              <label htmlFor="email">Email:</label>
              <input type="text" name='email' {... register('email', {
                required: 'Por favor, introduzca su email.',
                pattern: { value: /\S+@\S+\.\S+/, message: 'Introdzca un email válido.' }
              }) }/>
              {errors.email && <span className='login-errors'>{errors.email.message}</span>}
              <label htmlFor="password">Contraseña:</label>
              <input type="password" name='password' {... register('password', {
                required: 'Por favor, introduzca su contraseña.'
              })}
              onBlur={ () => handlePasswordValidation() }/>
              {errors.password && <span className='login-errors'>{errors.password.message}</span>}
              <label htmlFor="repeatPassword">Repita la contraseña:</label>
              <input type="password" name='repeatPassword' {... register('repeatPassword', {
                required: 'Por favor, repita su contraseña.',
              })}
              onBlur={ () => handlePasswordValidation() }/>
              {errors.repeatPassword && <span className='login-errors'>{errors.repeatPassword.message}</span>}
              {!isLogged && <button type='submit' className='login-button'>Login</button>}
          </form>
          {isLogged && <div className='logout-data'>
                <button onClick={handleLogouts}>Logout</button>
                <p>¿Quieres cerrar sesión, {userData.name}?</p>
            </div>}
      </div>
    </div>
    )
}

export default Login;

