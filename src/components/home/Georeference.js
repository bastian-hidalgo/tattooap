import React from 'react'
import { UserGeoreference } from './UserGeoreference'

/**
 * Functional component que contiene todos los usuarios cercanos
 * @returns {DOMElement}
 */

export const Georeference = () => {
    const styles = {
        hr: {
            borderColor: '#6a41a1',
        }
    }
    return (
        <div className='mt-5'>
            <h3>Tatuadores cercanos</h3>
            <hr style={ styles.hr } />
            <UserGeoreference />
            <UserGeoreference />
            <UserGeoreference />
            {/* <h4>Ver más</h4> */}
        </div>
    )
}
