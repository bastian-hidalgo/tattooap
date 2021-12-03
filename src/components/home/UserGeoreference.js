import React from 'react'
import Avatar from '@mui/material/Avatar';

/**
 * Functional component que retorna en el HomeLayout cada usuario cercano
 * @returns {DOMElement}
 */

export const UserGeoreference = () => {
    return (
        <div className='usergeo__geo' >
            <div className='usergeo__user pointer'>
                <Avatar sx={{ width: 30, height: 30 }}/>
                <p>rockabilli.50</p>
            </div>
            <div className='usergeo__distance'>
                <h5>1 Km</h5>
            </div>
        </div>
    )
}
