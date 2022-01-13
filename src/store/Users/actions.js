export const ACTIONS = {
  GET_USERS: 'APP/USERS/GET_USERS',
  CREATE_USER: 'APP/USERS/CREATE_USER',
  LOGIN_USER: 'APP/USERS/LOGIN_USER'
};

const usersActions = {
  getUsersByName: (data) => 
    ({
      type: ACTIONS.GET_USERS,
      data: data
    }),
  createUser: (data) => 
    ({
      type: ACTIONS.CREATE_USER,
      data: data
    }),
  loginUser: (data) =>
    ({
      type: ACTIONS.LOGIN_USER,
      data: data
    })
}

export default usersActions;
