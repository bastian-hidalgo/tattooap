import React, { useState } from 'react'
import { Navbar } from '../navbar/Navbar'
import { NavbarAddPost } from '../navbar/NavbarAddPost'
import { HomeLayout } from './HomeLayout'

/**
 * Functional component que retorna la página de Inicio en donde se verán
 * todas las publicaciones, tatuadores cercanos, eventos, etc.
 * 
 * El useState es un Hook el cual se dedica a mostrar el menú para realizar un nuevo Post
 * @returns {DOMElement}
 */

export const HomeScreen = () => {

    const [showAddPost, setShowAddPost] = useState(false)



    return (
        <div>
            <Navbar showAddPost={showAddPost} setShowAddPost={setShowAddPost}/>
            {
                showAddPost &&
                <NavbarAddPost showAddPost={showAddPost} setShowAddPost={setShowAddPost}/>
            }
            <main>
                <HomeLayout />

            </main>
        </div>
    )
}
