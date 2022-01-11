import React from 'react'
import { NavbarItems } from './NavbarItems';

import Searchbar from './../searchbar';

/**
 * Functional component que retorna el la barra de navegación.
 * Recibe como parámetros showAddPost y setShowAddPost
 * @param {*} param0 
 * @returns {DOMElement}
 */

export const Navbar = ({showAddPost, setShowAddPost}) => {
    
    return (
        <div>
            <div className='navbar'>
                <div className='navbar__container'>
                    <div className='navbar__logo'>
                        <h2>TattooApp</h2>
                    </div>
                    <div className='navbar__search'>
                        <Searchbar />
                    </div>
                    <NavbarItems showAddPost={showAddPost} setShowAddPost={setShowAddPost}/>
                </div>
            </div>
        </div>
    )
}
