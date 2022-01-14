import { create } from 'apisauce';

import LocalStorage from './../services/LocalStorageService';

const accessToken = LocalStorage.getAccessToken();

export const api = create({
  baseURL: process.env.REACT_APP_API
});

if(accessToken){
  api.setHeader('x-token', accessToken.token);
}

export default api;
