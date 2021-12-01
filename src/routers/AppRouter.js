import React from 'react'
import { Routes, Route } from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';
import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/auth/*' element={ <AuthRouter /> } />
                
                <Route path="/*" element={ <DashboardRoutes /> } />
                
            </Routes>
        </>
    )
}
