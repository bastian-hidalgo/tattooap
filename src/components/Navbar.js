import React from 'react'
import Avatar from '../components/Avatar'
import Logo from './Logo'
import './Navbar.css'


export const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo />
            <Avatar />
        </div>
    )
}

export default Navbar