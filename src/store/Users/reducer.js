import { ACTIONS } from './actions';
import usersService from '../../services/Users/service';
import LocalStorage from '../../services/LocalStorageService';
import { toast } from 'react-toastify';

export const initialState = {
  users: [],
  createUser: {},
  loginUser: {}
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {  
    case ACTIONS.GET_USERS : {
      return Object.assign({}, state, {
        users: action.data,
      })
    }
    case ACTIONS.CREATE_USER : {
      return new Promise (async (resolve, reject) => {
        const { data } = await usersService.createUser(action.data);
        if(data?.errors?.length > 0){
          return reject(data.errors);
        }
        return resolve(data);
      }).then((data) => {
        toast.success('Te has registrado exitosamente');
        Object.assign({}, state, {
          createUser: data,
        });
        window.setTimeout(() =>
          window.location.href = "/auth/login", 3000);
      }).catch((err) => {
        err.map((error) => toast.error(error.msg));
      });
    }
    case ACTIONS.LOGIN_USER : 
      new Promise (async (resolve, reject) => {
        const { data } = await usersService.loginUser(action.data);
        if(data?.errors?.length > 0 || data.msg){
          return reject(data.errors || data.msg);
        }
        return resolve(data);
      }).then((data) => {
        toast.success('Sesión iniciada');
        
        Object.assign({}, state, {
          loginUser: data,
        });
        LocalStorage.setAccessToken({ token: data.token, usuario: data.usuario });
        window.setTimeout(() =>
          window.location.href = "/", 3000);
      }).catch((err) => {
        console.log(err);
        typeof err === 'object' ? err.map((error) => toast.error(error.msg)) : toast.error(err);
      });
    break
    default:
      return state;
  }  
};