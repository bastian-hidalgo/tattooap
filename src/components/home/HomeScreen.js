import React, { useState } from 'react'
import { Navbar } from '../navbar/Navbar'
import { NavbarAddPost } from '../navbar/NavbarAddPost'
import { HomeLayout } from './HomeLayout'

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
