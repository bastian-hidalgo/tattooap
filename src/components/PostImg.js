import React from 'react'

const styles = {
    postimg: {
        width: '100%'
    },
    img: {
        width: '100%',
        borderRadius: '0 0 3px 3px',
    }
}

export const PostImg = () => {
    const img = '/img/drstone.jpg'
    return (
        <div style={styles.postimg}>
            <img style={ styles.img } src={img} alt='Post imagen'/>
        </div>
    )
}
