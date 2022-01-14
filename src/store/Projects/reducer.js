import { ACTIONS } from './actions';
export const initialState = {
  projects: [],
  uploadProject: [],
  projectsById: []
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {  
    case ACTIONS.GET_PROJECTS : {
      return Object.assign({}, state, {
        ...state,
        projects: action.data
      });
    }
    case ACTIONS.GET_PROJECTS_BY_ID : {
      return Object.assign({}, state, {
        ...state,
        projectsById: action.data
      });
    }
    case ACTIONS.UPLOAD_PROJECT : {
      return Object.assign({}, state, {
        ...state,
        uploadProject: action.data,
        projects: [...state.projects, action.data.data.Proyecto]
      });
    }
    default:
      return state;
  }  
};