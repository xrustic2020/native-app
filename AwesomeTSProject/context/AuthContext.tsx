import {createContext} from 'react';

const authContext = createContext({
  isAuthorization: false,
});

export default authContext;
