import {createContext} from 'react';

const appContext = createContext({
  data: [],
  error: false,
  loading: false,
  getUserData: async () => {},
  clearData: () => {},
});

export default appContext;
