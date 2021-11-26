import React from 'react'
import { ProfileGalery } from './ProfileGalery'
import { ProfileOptions } from './ProfileOptions'
import { Avatar } from '@mui/material'

export const LayoutProfile = () => {
    return (
        <div className='layout'>
            <div className='profile__container'>
                <div className='profile__container-1'>
                    <div className='profile__follow'>
                        <div className='profile__box'>
                            <button className='profile__follow-btn'>
                                Seguir
                            </button>
                        </div>
                        <div className='profile__box'>
                            <h4>Seguidores: </h4>
                            <p>100</p>
                        </div>
                        <div className='profile__box'>
                            <h4>Seguidos: </h4>
                            <p>100</p>
                        </div>
                    </div>
                    <hr />
                    <ProfileOptions />
                    <ProfileGalery />
                </div>

                <div className='profile__container-info'>
                    <Avatar sx={{ width: 150, height: 150 }} />
                    <h3>Yami_Ink</h3>
                </div>

            </div>
        </div>
    )
}
