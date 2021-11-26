import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { NavLink } from 'react-router-dom'
import { NavbarAvatarMenu } from './NavbarAvatarMenu';



export const NavbarItems = ({showAddPost, setShowAddPost}) => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='navbar__items'>
            <div className='navbar__items-box' >
                <ControlPointIcon sx={{ width: 25, height: 25 }}
                    onClick={ () => (
                        setShowAddPost(!showAddPost)
                    )}
                />
            </div>

            <NavLink 
                className='navbar__items-box'
                end
                to='/'
            >
                <HomeIcon sx={{ width: 25, height: 25 }}/>
            </NavLink>

            {/* <div className='navbar__items-box' >
                <NotificationsIcon sx={{ width: 25, height: 25 }}/>
            </div> */}

            <div className='navbar__items-box' >
                <Avatar 
                    onClick={ () => {
                        setShowMenu(!showMenu)
                    }}
                    sx={{ width: 25, height: 25 }}
                />
            </div>
            
            { 
                showMenu && 
                <div className='navbar__container-menu-avatar'>
                    <NavbarAvatarMenu />
                </div>
            }
            
            
        </div>
    )
}
