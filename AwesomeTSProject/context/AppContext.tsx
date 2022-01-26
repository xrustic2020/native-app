import {createContext} from 'react';

const appContext = createContext({
  data: [],
  error: false,
  loading: false,
  getUserData: async () => {},
  clearData: () => {},
  load: async (key: string) => {},
  save: async (key: string, value: string) => {},
});

export default appContext;
