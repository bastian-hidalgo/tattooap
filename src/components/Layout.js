import React from 'react'
import './Layout.css'
import './Container.css'
import Posts from './Posts'


export const Layout = () => {
    return (
        <div className='layout'>
            <div className='container'>
                <h1>Inicio</h1>
                <Posts />
            </div>
            
        </div>
    )
}

export default Layout
