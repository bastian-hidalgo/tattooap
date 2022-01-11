import React from 'react'
import { Routes, Route } from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';
import { AuthRouter } from './AuthRouter';

/** 
 *  AppRouter: Contiene las rutas de Auth que contiene login y register
 *  También el Dashboard contiene las rutas de la aplicación  
 *  Resultados: Redirección de cada componente de navegación
 * 
*/

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
