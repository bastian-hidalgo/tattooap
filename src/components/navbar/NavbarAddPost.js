import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

export const NavbarAddPost = ({showAddPost, setShowAddPost}) => {
    return (
        <div className='navbar__add-post animate__animated animate__fadeIn'>
            
            <div className='navbar__add-post-card'>
                <div className='navbar__add-post-close'>
                    <CloseIcon sx={{ width: 25, height: 25 }}
                        className='closeicon'
                        onClick={ () => {
                            setShowAddPost(!showAddPost)
                        } }
                    />
                </div>
                <div className='container-add-post'>
                    <input 
                        className='mb-5'
                        placeholder='Descripción'
                        type='text'
                        name='description'
                    />
                    <hr/>

                    <input
                        type='file'
                        name='imagen'
                    />
                </div>
            </div>
        </div>
    )
}
