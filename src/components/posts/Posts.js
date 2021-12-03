import React from 'react'
import { Post } from './Post'

/**Functional component contenedor de los posts */
export const Posts = () => {
    return (
        <div className='posts__posts'>
            <Post />
            <Post />
            <Post />
        </div>
    )
}
