import React from 'react';
import { Avatar } from '@mui/material'

import { useStore } from '../../../../../store/Store';

import projectsService from '../../../../../services/projects/service';
import projectActions from '../../../../../store/Projects/actions';

const User = ({user}) => {
  const [, dispatch] = useStore();
  const handleGetUsuario = () => {
    const handleGetData = async () => {
      const { data: projectsData } = await projectsService.getProjectsById(user.uid);
      new Promise ((resolve, reject) => {
          resolve(projectsData);
      }).then((data) => dispatch(projectActions.getProjects(data)));
    };
    handleGetData();
  }
  return (
    <div key={user.uid} className="results__result">
      <div className='posts__post-box' >
        <Avatar src={user.profile_img} sx={{ width: 24, height: 24 }} />
      </div>
      <div className='posts__post-box' >
        <h5 onClick={handleGetUsuario}>{user.nombre}</h5>
      </div>
    </div>
  )
};

export default User;
