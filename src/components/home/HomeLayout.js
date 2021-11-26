import React from 'react'
import { Georeference } from './Georeference'
import { Posts } from '../posts/Posts'

export const HomeLayout = () => {
    return (
        <div>
            <div className='hlayout'>
                <div className='hlayout__container mt-5'>
                    <div className='hlayout__container-posts'>
                        <h1>Inicio</h1>
                        <Posts />
                    </div>
                    <div className='hlayout__container-georeference'>
                        <Georeference />
                    </div>
                </div>
            </div>
        </div>
    )
}
