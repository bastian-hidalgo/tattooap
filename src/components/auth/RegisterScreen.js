import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { InputGender } from './InputGender';

import { useStore } from '../../store/Store';
import usersActions from '../../store/Users/actions';

import { SelectList } from './SelectList'

/**
 * RegisterScreen es la página de registro que contiene todo el formulario y además contiene el estado inicial de los valores del formulario
 * @returns {DOMElement}
 */

export const RegisterScreen = () => {
    const [, dispatch] = useStore();

    // Hook - useForm
    const [formValues, handleInputChange] = useForm({
        nombre: '',
        username: '',
        edad: '',
        gender: '',
        comuna_local: '',
        direccion_local: '',
        correo: '',
        rol: 'Tatuador',
        password: '',
        profileImg: ''
    });

    const { 
        nombre,
        username,
        edad,
        gender,
        comuna_local,
        direccion_local,
        correo,
        password,
    } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(usersActions.createUser(formValues));
    };

    return (
        <div>
            <h3 className='auth__title'>Registro</h3>
            <form onSubmit={handleSubmit}>
                <input
                    className='auth__input'
                    type='text'
                    placeholder='Nombre completo'
                    name='nombre'
                    autoComplete='off'
                    value={nombre}
                    onChange={handleInputChange}
                />
                <input
                    className='auth__input'
                    type='text'
                    placeholder='Nombre de usuario'
                    name='username'
                    autoComplete='off'
                    value={username}
                    onChange={handleInputChange}
                />
                <input
                    className='auth__input'
                    type='text'
                    placeholder='Edad'
                    name='edad'
                    autoComplete='off'
                    value={edad}
                    onChange={handleInputChange}
                />
                <InputGender gender={gender} handleInputChange={handleInputChange} />
                <SelectList comunaLocal={comuna_local} handleInputChange={handleInputChange} />
                <input
                    className='auth__input'
                    type='text'
                    placeholder='Dirección'
                    name='direccion_local'
                    autoComplete='off'
                    value={direccion_local}
                    onChange={handleInputChange}
                />
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
                    className='btn btn-primary btn-block'
                    type='submit'
                >
                    Registrarse
                </button>

                <Link to='/auth/login' className='link'>
                    ¿Ya tienes una cuenta?
                </Link>
            </form>
        </div>
    )
}
