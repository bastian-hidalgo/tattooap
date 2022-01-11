import React from 'react'
import { Avatar } from '@mui/material'

/**
 * Functional component que retorna el modelo de una publicación al estilo Post
 * @returns {DOMElement}
 */

export const Post = ({data: { author, img, profile_img, title}}) => {
    return (
        <div>
            <div className='posts__post'>
                <div className='posts__post-header' >
                    <div className='posts__post-box' >
                        <Avatar src={profile_img} sx={{ width: 24, height: 24 }} />
                    </div>
                    <div className='posts__post-box' >
                        <h5>{author}</h5>
                    </div>
                </div>

                <div className='posts__post-img'>
                    <img className='posts__img' src={img} alt='Imagen' />
                </div>

                <div className='posts__post-description'>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}
