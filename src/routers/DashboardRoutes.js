import React from 'react'
import { HomeScreen } from '../components/home/HomeScreen';
import { ProfileConfigScreen } from '../components/profile/ProfileConfigScreen';
import { ProfileScreen } from '../components/profile/ProfileScreen';
import { Routes, Route } from "react-router-dom";

/**
 * 
 * Functional component que contiene las rutas de la navegación de la aplicación
 */
export const DashboardRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={ <HomeScreen /> } />
                <Route path='/profile' element={ <ProfileScreen />} />
                <Route path='/config' element={ <ProfileConfigScreen />} />
            </Routes>
        </div>
    )
}
