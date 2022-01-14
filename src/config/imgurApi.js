import { create } from 'apisauce';

export const apiImgur = create({
  baseURL: process.env.REACT_APP_API_IMGUR,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  }
});

export default apiImgur;
