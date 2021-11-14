import React from 'react'
import Avatar from '@mui/material/Avatar';

const styles = {
    header: {
        borderBottom: 'solid 1px #6a41a1',
        padding: '8px',
        display: 'flex',
        alignItems: 'center'
    },
    h5: {
        margin: ' 0 10px',
    },
    box: {
        cursor: 'pointer',
    }
}

export const HeaderPost = () => {
    return (
        <div style={ styles.header } >
            <div style={ styles.box } >
                <Avatar sx={{ width: 24, height: 24 }}/>
            </div>
            <div style={ styles.box } >
                <h5 style={styles.h5}>Rockabilly.50</h5>
            </div>
        </div>
    )
}
