import {createContext} from 'react';

const authContext = createContext({
  isAuthorization: false,
  logIn: () => {},
  logOut: () => {},
});

export default authContext;
