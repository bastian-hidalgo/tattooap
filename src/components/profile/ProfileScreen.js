import React, { useState, useEffect } from 'react'
import { Navbar } from '../navbar/Navbar'
import { NavbarAddPost } from '../navbar/NavbarAddPost'
import { LayoutProfile } from './LayoutProfile'
import { useStore } from '../../store/Store';
import projectActions from '../../store/Projects/actions';
import projectsService from '../../services/projects/service';
import LocalStorage from '../../services/LocalStorageService';

/**
 * Functional component <ProfileScreen /> que retorna el perfil del usuario
 * @returns {DOMElement}
 */

export const ProfileScreen = () => {

    const [showAddPost, setShowAddPost] = useState(false)
    const [, dispatch] = useStore();
    const accessToken = LocalStorage.getAccessToken();
    useEffect(() => {
        const handleGetData = async () => {
            const { data: projectsData } = await projectsService.getProjectsById(accessToken.usuario.uid);
            new Promise ((resolve, reject) => {
                resolve(projectsData);
            }).then((data) => dispatch(projectActions.getProjectsById(data)));
        };
        handleGetData();
    }, [dispatch]);
    return (
        <div>
            <Navbar showAddPost={showAddPost} setShowAddPost={setShowAddPost} />
                {
                    showAddPost &&
                        <NavbarAddPost showAddPost={showAddPost} setShowAddPost={setShowAddPost}/>
                }
            <LayoutProfile />
        </div>
    )
}
