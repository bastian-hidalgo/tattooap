export const ACTIONS = {
  GET_USERS: 'APP/USERS/GET_USERS'
};

const usersActions = {
  getUsersByName: (data) => 
    ({
      type: ACTIONS.GET_USERS,
      data: data
    })
}

export default usersActions;
