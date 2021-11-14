import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const styles = {
    search: {
        color: '#fff',
        display: 'flex',

    },
    input: {
        border: 'none',
        borderBottom: '1px solid #6a41a1',
        backgroundColor: 'transparent',
        margin: '0 10px',
        width: '200px',
        color: '#fff'
    }
}

export const SearchField = () => {
    return (
        <div style={styles.search}>
            <input style={styles.input}></input>
            <SearchIcon />
            
        </div>
    )
}
