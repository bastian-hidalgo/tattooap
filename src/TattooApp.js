import React from 'react'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import './TattooApp.css'

export const TattooApp = () => {
    return (
        <div>
            <Navbar />
            <Layout />
        </div>
    )
}

export default TattooApp
