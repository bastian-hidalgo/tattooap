import React from 'react'
import './Container.css'

const styles = {
    tabList: {
        height: '40px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
    },
    box: {
        cursor: 'pointer',
    }
}
export const TabList = () => {
    return (
        <div style={ styles.tabList } >
            <div style={ styles.box } className='box'>
                <p>Tatuajes</p>
            </div>
            <div style={ styles.box } className='box'>
                <p>Disponibles</p>
            </div>
            <div style={ styles.box } className='box'>
                <p>Certificados</p>
            </div>
            <div style={ styles.box } className='box'>
                <p>Calificaciones</p>
            </div>
        </div>
    )
}
