import { ACTIONS } from './actions';
export const initialState = {
  users: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {  
    case ACTIONS.GET_USERS : {
      return Object.assign({}, state, {
        users: action.data,
      })
    }
    default:
      return state;
  }  
};