import React from 'react'
import { Avatar } from '@mui/material'

export const Post = () => {

    const img = '/img/drstone.jpg'

    return (
        <div>
            <div className='posts__post'>
                <div className='posts__post-header' >
                    <div className='posts__post-box' >
                        <Avatar sx={{ width: 24, height: 24 }} />
                    </div>
                    <div className='posts__post-box' >
                        <h5>Rockabilly.50</h5>
                    </div>
                </div>

                <div className='posts__post-img'>
                    <img className='posts__img' src={img} alt='Imagen' />
                </div>

                <div className='posts__post-description'>
                    <p>Tatuaje de Dr Stone</p>
                </div>
            </div>
        </div>
    )
}
