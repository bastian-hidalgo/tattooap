import React, { useEffect } from 'react'
import { Post } from './Post'
import { useStore } from '../../store/Store';

import projectsService from '../../services/projects/service';
import projectActions from '../../store/Projects/actions';

/**Functional component contenedor de los posts */
export const Posts = () => {
    const [{projects: { projects }}, dispatch] = useStore();
    useEffect(() => {
        const handleGetData = async () => {
            const { data: projectsData } = await projectsService.getProjects();
            new Promise ((resolve, reject) => {
                resolve(projectsData);
            }).then((data) => dispatch(projectActions.getProjects(data)));
        };
        handleGetData();
    }, [dispatch]);
    return (
        <div className='posts__posts'>
            {projects && projects?.map((project) => (
                <Post key={project.id} data={project} />
            ))}
        </div>
    )
}
