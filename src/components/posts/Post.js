import React from 'react'
import { Avatar } from '@mui/material'

/**
 * Functional component que retorna el modelo de una publicación al estilo Post
 * @returns {DOMElement}
 */

export const Post = ({data: { _id, tatuador, imgUrl, profile_img, title}}) => {
    return (
        <div key={_id}>
            <div className='posts__post'>
                <div className='posts__post-header' >
                    <div className='posts__post-box' >
                        <Avatar src={profile_img} sx={{ width: 24, height: 24 }} />
                    </div>
                    <div className='posts__post-box' >
                        <h5>{tatuador}</h5>
                    </div>
                </div>

                <div className='posts__post-img'>
                    <img className='posts__img' src={imgUrl} alt='Imagen' />
                </div>

                <div className='posts__post-description'>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}
