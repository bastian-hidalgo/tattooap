import { ACTIONS } from './actions';
import imgurService from '../../services/imgur/service';
export const initialState = {
  projects: [],
  uploadProject: {}
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {  
    case ACTIONS.GET_PROJECTS : {
      return Object.assign({}, state, {
        projects: action.data,
      })
    }
    case ACTIONS.UPLOAD_PROJECT : {
      return new Promise (async (resolve, reject) => {
        console.log(action.data);
        const data = await imgurService.uploadImg(action.data);
        return resolve(data);
      }).then((data) => {
        console.log(data);
      });
    }
    default:
      return state;
  }  
};