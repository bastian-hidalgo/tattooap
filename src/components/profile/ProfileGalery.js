import React from 'react'
import { ImgCard } from './ImgCard'

/**
 * Functional component que retorna la galería de imágenes del perfíl
 * @returns {DOMElement}
 */

export const ProfileGalery = () => {
    return (
        <div className='profile__galery' >
            <ImgCard />
            <ImgCard />
            <ImgCard />
            <ImgCard />
            <ImgCard />
        </div>
    )
}
