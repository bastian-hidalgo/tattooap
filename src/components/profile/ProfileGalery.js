import React from 'react'
import { ImgCard } from './ImgCard'
import { useStore } from '../../store/Store';
/**
 * Functional component que retorna la galería de imágenes del perfíl
 * @returns {DOMElement}
 */

export const ProfileGalery = () => {
    const [{projects: { projects }}] = useStore();
    return (
        <div className='profile__galery' >
            {projects && projects?.map((project) => (
                <ImgCard project={project} />
            ))}
        </div>
    )
}
