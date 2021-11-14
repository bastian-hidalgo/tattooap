import { Avatar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'

const styles = {
    items: {
        alignItems: 'flex.start',
        display: 'flex',
        color: '#fff',
        justifyContent: 'end',

    },
    box: {
        margin: '0 10px',
        cursor: 'pointer',
    }
}

export const NavBarItems = () => {
    return (
        <div style={ styles.items }>
            <div style={ styles.box } >
                <HomeIcon sx={{ width: 30, height: 30 }}/>
            </div>
            <div style={ styles.box } >
                <NotificationsIcon sx={{ width: 30, height: 30 }}/>
            </div>
            <div style={ styles.box } >
                <Avatar sx={{ width: 30, height: 30 }}/>
            </div>
        </div>
    )
}
