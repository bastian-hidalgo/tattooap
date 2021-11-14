import React from 'react'


const styles = {
    imgCard: {
        width: '30%',
        marginBottom: '20px'
        
    },
    img: {
        width: '100%',
    }
}
export const ImgCard = () => {
    return (
        <div style={styles.imgCard}>
            <img style={styles.img} src='../img/drstone.jpg'></img>
        </div>
    )
}
