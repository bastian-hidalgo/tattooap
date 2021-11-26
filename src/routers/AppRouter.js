import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { HomeScreen } from '../components/home/HomeScreen';
import { ProfileConfigScreen } from '../components/profile/ProfileConfigScreen';
import { ProfileScreen } from '../components/profile/ProfileScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/auth/*' element={ <AuthRouter /> } />
                <Route exact path='/' element={ <HomeScreen /> } />
                <Route path='/profile' element={ <ProfileScreen />} />
                <Route path='/config' element={ <ProfileConfigScreen />} />

                <Route path='/*' element={ <Navigate to='/auth/login' /> } />
            </Routes>
        </>
    )
}
