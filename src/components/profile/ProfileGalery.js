import React from 'react'
import { ImgCard } from './ImgCard'
import { useStore } from '../../store/Store';
/**
 * Functional component que retorna la galería de imágenes del perfíl
 * @returns {DOMElement}
 */

export const ProfileGalery = () => {
    const [{projects: { projectsById }}] = useStore();
    return (
        <div className='profile__galery' >
            {projectsById && projectsById?.map((project) => (
                <ImgCard project={project} />
            ))}
        </div>
    )
}
