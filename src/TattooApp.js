import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './routers/AppRouter';



/**
 * El functional component TattooApp es el que contiene TODA la aplicación el cual se renderiza en index.js
 */
export const TattooApp = () => {
    
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}
