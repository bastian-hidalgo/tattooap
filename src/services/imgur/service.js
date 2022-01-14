import { apiImgur } from '../../config/imgurApi';

const imgurService = {
  authorize: () => apiImgur.post(
    `/oauth2/authorize?client_id=${process.env.REACT_IMGUR_CLIENT_ID}&response_type=token&state=APPLICATION_STATE`),
  getAccessToken: () => apiImgur.post('/oauth2/token'),
  uploadImg: (image) => apiImgur.post('/3/image', image)
};

export default imgurService;