import { api } from '../../config/api';

const usersService = {
  getUsers: () => api.get('/users'),
  getUsersByName: (string) => api.get(`/users?query=${string}`)
};

export default usersService;
