import React from 'react';
import LocalStorage from './../services/LocalStorageService';

import { projectsReducer as projects } from './Projects/reducer';
import { usersReducer as users } from './Users/reducer';

const accessToken = LocalStorage.getAccessToken();

const Store = React.createContext();
Store.displayName = 'Store';

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce( // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

const initialState = {
  projects: [],
  users: [],
  accessToken: accessToken || {token: null}
};

const rootReducer = combineReducers({
  projects,
  users
});

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [globalState, dispatch] = React.useReducer(rootReducer, initialState);
  const store = React.useMemo(() => [globalState, dispatch], [globalState]);
  return (
    <Store.Provider value={store}>{children}</Store.Provider>
  );
};