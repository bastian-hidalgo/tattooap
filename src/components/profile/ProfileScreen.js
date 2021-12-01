import React, { useState } from 'react'
import { Navbar } from '../navbar/Navbar'
import { NavbarAddPost } from '../navbar/NavbarAddPost'
import { LayoutProfile } from './LayoutProfile'

export const ProfileScreen = () => {

    const [showAddPost, setShowAddPost] = useState(false)
    return (
        <div>
            <Navbar showAddPost={showAddPost} setShowAddPost={setShowAddPost} />
                {
                    showAddPost &&
                        <NavbarAddPost showAddPost={showAddPost} setShowAddPost={setShowAddPost}/>
                }
            <LayoutProfile />
        </div>
    )
}
