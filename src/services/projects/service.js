import { api } from '../../config/api';

const projectsService = {
  getProjects: () => api.get('/projects'),
};

export default projectsService;
