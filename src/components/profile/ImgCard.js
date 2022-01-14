import React from 'react'

/** Functional component que contiene el Card de cada imágen de la galería */
export const ImgCard = ({project}) => {
    return (
        <div className='profile__img-card'>
            <img src={project.imgUrl} alt={project.title} />
            <h5>{project.title}</h5>
        </div>
    )
}
