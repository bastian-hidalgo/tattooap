import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { InputGender } from './InputGender';

import { SelectList } from './SelectList'

export const RegisterScreen = () => {



    // Hook - useForm
    const [formValues, handleInputChange] = useForm({
        name: '',
        username: '',
        age: '',
        gender: '',
        email: '',
        repeatEmail: '',
        region: '',
        comuna: '',
        address: '',
        password: '',
        repeatPassword: '',
        userType: ''
    });
    const { name, username, age, gender, region, comuna, address, email, repeatEmail, password, repeatPassword, userType } = formValues;

    console.log(formValues)

    // Login de usuario
    const handleLogin = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <h3 className='auth__title'>Registro</h3>
            <form onSubmit={handleLogin}>
                <input
                    className='auth__input'
                    type='text'
                    placeholder='Nombre completo'
                    name='name'
                    autoComplete='off'
                    value={name}
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
                    name='age'
                    autoComplete='off'
                    value={age}
                    onChange={handleInputChange}
                />

                <InputGender gender={gender} handleInputChange={handleInputChange} />
                <SelectList region={region} comuna={comuna} userType={userType} handleInputChange={handleInputChange} />

                


                <input
                    className='auth__input'
                    type='text'
                    placeholder='Dirección'
                    name='address'
                    autoComplete='off'
                    value={address}
                    onChange={handleInputChange}
                />
                <input
                    className='auth__input'
                    type='email'
                    placeholder='Correo'
                    name='email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className='auth__input'
                    type='email'
                    placeholder='Repetir correo'
                    name='repeatEmail'
                    autoComplete='off'
                    value={repeatEmail}
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
                <input
                    className='auth__input'
                    type='password'
                    placeholder='Repetir contraseña'
                    name='repeatPassword'
                    autoComplete='off'
                    value={repeatPassword}
                    onChange={handleInputChange}
                />

                <button
                    className='btn btn-primary btn-block'
                    type='submit'
                >
                    Registrarse
                </button>

                <div className='auth__social-networks'>
                    <p>Login with social networks</p>

                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Iniciar con google</b>
                        </p>
                    </div>
                </div>

                <Link to='/auth/login' className='link'>
                    ¿Ya tienes una cuenta?
                </Link>
            </form>
        </div>
    )
}
