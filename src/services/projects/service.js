import { api } from '../../config/api';

const projectsService = {
  getProjects: () => api.get('/proyectos'),
};

export default projectsService;
