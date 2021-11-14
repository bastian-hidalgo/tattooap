import React from 'react'
import { SearchUser } from './SearchUser'

const styles = {
    hr: {
        borderColor: '#6a41a1',
    }
}

export const Georeference = () => {
    return (
        <div>
            <h3>Tatuadores cercanos</h3>
            <hr style={ styles.hr } />
            <SearchUser />
            <SearchUser />
            <SearchUser />
            <h4>Ver más</h4>
        </div>
    )
}
