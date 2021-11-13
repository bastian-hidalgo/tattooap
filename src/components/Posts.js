import React from 'react'
import Post from './Post'

const styles = {
    posts: {

        display: 'grid',
        justifyContent: 'center',

    }
}

export const Posts = () => {
    return (
        <div style={styles.posts}>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts
