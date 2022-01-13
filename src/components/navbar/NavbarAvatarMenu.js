import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Fingerprint from '@mui/icons-material/Fingerprint';
import SettingsIcon from '@mui/icons-material/Settings';

import { Link } from 'react-router-dom'
import { useStore } from '../../store/Store';

/** Functional component que contiene el submenú del NavbarItems Perfil */

export const NavbarAvatarMenu = () => {
    const [{accessToken: {token}}] = useStore();
    return (
        <div className='navbar__menu-avatar'>
            {!token && (
                <>
                    <Link className='navbar__menu-avatar-items' to='/auth/register'>
                        <Fingerprint />
                        <p>Registrarme</p>
                    </Link>
                    <Link className='navbar__menu-avatar-items' to='/auth/login'>
                        <PersonIcon />
                        <p>Iniciar Sesión</p>
                    </Link>
                </>
            )}
            {token && (
                <Link className='navbar__menu-avatar-items' to='/config'>
                    <SettingsIcon />
                    <p>Mi perfil</p>
                </Link>
            )}
        </div>
    )
}
