import { Avatar } from '@mui/material'
import React from 'react'
import './Container.css'
import { FollowBtn } from './FollowBtn'
import { TabList } from './TabList'
import { ProfileGalery } from './ProfileGalery'

export const LayoutProfile = () => {
    return (
        <>
            <div className='layout'>
                <div className='container-profile'>
                    <div className='container-profile-1'>
                        <div className='container-follow'>
                            <div className='box'>
                                <FollowBtn />
                            </div>
                            <div className='box'>
                                <h4>Seguidores: </h4>
                                <p>100</p>
                            </div>
                            <div className='box'>
                                <h4>Seguidos: </h4>
                                <p>100</p>
                            </div>
                        </div>
                        <hr/>
                        <TabList />
                        <div className='container-follow'>
                            <ProfileGalery />
                        </div>
                    </div>

                    <div className='container-3'>
                        <Avatar sx={{ width: 150, height: 150 }}/>
                        <h3>Yami_Ink</h3>
                    </div>

                </div>
            </div>
        </>
    )
}
