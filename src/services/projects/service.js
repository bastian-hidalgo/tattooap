import { api } from '../../config/api';

const projectsService = {
  getProjects: () => api.get('/proyectos'),
  uploadProject: (project) => api.post('/proyectos', project),
  getProjectsById: (id) => api.get(`/proyectos?idTatuador=${id}`),
};

export default projectsService;
