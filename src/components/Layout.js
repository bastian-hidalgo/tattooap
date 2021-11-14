import React from 'react'
import './Layout.css'
import './Container.css'
import Posts from './Posts'
import { Georeference } from './Georeference'


export const Layout = () => {
    return (
        <div className='layout'>
            <div className='container'>
                <div className='container-1'>
                    <h1>Inicio</h1>
                    <Posts />
                </div>
                <div className='container-2'>
                    <Georeference />
                </div>
            </div>
        </div>
    )
}

export default Layout
