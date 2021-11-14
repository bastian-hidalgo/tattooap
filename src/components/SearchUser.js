import React from 'react'
import Avatar from '@mui/material/Avatar';

const styles = {
    georeference:{
        display: 'flex',
        alignItems: 'center',
        margin: '5px',
    },
    p: {
        margin: '0 10px',
    },
    distance: {
        width: '100%',
        textAlign: 'right',
    }
}

export const SearchUser = () => {
    return (
        <div style={ styles.georeference } >
            <Avatar />
            <p style={ styles.p } >rockabilli.50</p>
            <div style={styles.distance}>
                <h5>1 Km</h5>
            </div>
            
        </div>
    )
}
