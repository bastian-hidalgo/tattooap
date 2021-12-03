import React from 'react'

/**
 * Functional component que contiene las opciones de menú en el perfíl de usuario
 * @returns {DOMElement}
 */

export const ProfileOptions = () => {
    return (
        <div className='profile__profile-options' >
            <div className='pointer' >
                <p>Tatuajes</p>
            </div>
            <div className='pointer' >
                <p>Disponibles</p>
            </div>
            <div className='pointer' >
                <p>Certificados</p>
            </div>
            <div className='pointer' >
                <p>Calificaciones</p>
            </div>
        </div>
    )
}
