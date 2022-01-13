import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useStore } from '../../store/Store';
import usersActions from '../../store/Users/actions';

/**
 * LoginScreen es la página principal que contiene el formulario de inicio de sesión.
 * Se utiliza el hook useForm para tener control del formulario
 * @returns {DOMElement}
 */

export const LoginScreen = () => {
    const [, dispatch] = useStore();
    // Hook - useForm
    const [formValues, handleInputChange] = useForm({
        correo: '',
        password: '',
    });
    const {correo, password} = formValues;

    // Login de usuario
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(usersActions.loginUser(formValues));
    }

    return (
        <>
            <h3 className='auth__title'>Login</h3>
            <form onSubmit={ handleLogin }>
                <input 
                    className='auth__input'
                    type='email'
                    placeholder='Correo'
                    name='correo'
                    autoComplete='off'
                    value={correo}
                    onChange={handleInputChange}
                />

                <input 
                    className='auth__input'
                    type='password'
                    placeholder='Contraseña'
                    name='password'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    className='btn btn-primary btn-block mb-5'
                    type='submit'
                >
                    Iniciar sesión
                </button>

                <Link to='/auth/register' className='link btn btn-primary btn-block'>
                    Crear una nueva cuenta
                </Link>
            </form>
        </>
    )
}
