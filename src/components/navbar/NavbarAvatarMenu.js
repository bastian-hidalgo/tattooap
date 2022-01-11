import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Fingerprint from '@mui/icons-material/Fingerprint';
import SettingsIcon from '@mui/icons-material/Settings';

import { Link } from 'react-router-dom'

/** Functional component que contiene el submenú del NavbarItems Perfil */

export const NavbarAvatarMenu = () => {
    return (
        <div className='navbar__menu-avatar'>
            <Link className='navbar__menu-avatar-items' to='/profile'>
                <Fingerprint />
                <p>Registrarme</p>
            </Link>
            <Link className='navbar__menu-avatar-items' to='/profile'>
                <PersonIcon />
                <p>Iniciar Sesión</p>
            </Link>
            <Link className='navbar__menu-avatar-items' to='/config'>
                <SettingsIcon />
                <p>Configuración</p>
            </Link>
        </div>
    )
}
