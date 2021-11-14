import React from 'react'
import { HeaderPost } from './HeaderPost'
import { PostImg } from './PostImg'



const styles = {
    post: {
        border: 'solid 1px #6a41a1',
        margin: '15px',
        width: '610px',
        borderRadius: '5px',
    }
}

export const Post = () => {
    return (
        <div>
            <div style={styles.post}>
                <HeaderPost />
                <PostImg />
            </div>
        </div>
    )
}

export default Post
