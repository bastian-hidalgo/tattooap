import { api } from '../../config/api';

const usersService = {
  getUsers: () => api.get('/usuarios'),
  getUsersByName: (string) => api.get(`/usuarios?query=${string}`),
  createUser: (user) => api.post('/usuarios', user),
  loginUser: (login) => api.post('/auth', login),
};

export default usersService;
