import React from 'react'
import Logo from './Logo'
import './Navbar.css'
import { SearchField } from './SearchField'
import { NavBarItems } from './NavBarItems';


export const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo />
            <SearchField />
            <NavBarItems />
            
        </div>
    )
}

export default Navbar