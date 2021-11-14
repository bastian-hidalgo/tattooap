import React from 'react'
import { ImgCard } from './ImgCard'


const styles = {
    galery: {
        display:'flex',
        justifyContent: 'start',
        flexWrap: 'wrap'
    }
}

export const ProfileGalery = () => {
    return (
        <div>
            <div style={ styles.galery } >
                <ImgCard />
                <ImgCard />
                <ImgCard />
                <ImgCard />
                <ImgCard />
            </div>
        </div>
    )
}
