import { ACTIONS } from './actions';
export const initialState = {
  projects: []
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {  
    case ACTIONS.GET_PROJECTS : {
      return Object.assign({}, state, {
        projects: action.data,
      })
    }
    default:
      return state;
  }  
};