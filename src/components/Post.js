import React from 'react'



const styles = {
    post: {
        border: 'solid 1px #6a41a1',
        margin: '15px',
        width: '610px'
    }
}

export const Post = () => {
    return (
        <div>
            <div style={styles.post}>
                <h3>Este es un post</h3>
            </div>
        </div>
    )
}

export default Post
