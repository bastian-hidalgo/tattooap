import React from 'react'
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

/**
 * Functional component AuthRouter contiene las rutas de login y register.
 * En caso de que el usuario escriba en la URL despues del dominio /1Qkjas@23mM o cualquier cosa luego del /
 * este le redirigirá a la Screen de Login
 */

export const AuthRouter = () => {
    return (
        <div className='auth__main'>
            <div className='auth__box-container'>
                <Routes>
                    <Route exact path='/login' element={<LoginScreen />} />
                    <Route exact path='/register' element={<RegisterScreen />} />

                    <Route path='/*' element={<Navigate to='/auth/login' />} />
                </Routes>
            </div>
        </div>
    )
}
