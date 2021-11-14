import React from 'react'

const styles = {
    followBtn: {
        backgroundColor: '#bc5cfc',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        color: '#fff',
        fontFamily: 'Helvetica, sans-serif',
        fontSize: '1rem',
        padding: '10px',
    }
}

export const FollowBtn = () => {
    return (
        <div>
            <button style={ styles.followBtn }>Seguir</button>
        </div>
    )
}
