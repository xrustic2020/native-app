import React, {Component} from 'react';
import {Platform} from 'react-native';
import mobileStore from './store/mobileStorage';
import webStore from './store/webStorage';

interface IMobileStore {
  load: (key: string) => Promise<any>;
  save: (key: string, value: any) => Promise<void>;
}

interface IWebStore {
  load: (key: string) => any;
  save: (key: string, value: any) => void;
}

interface IStorage {
  web: IWebStore;
  mobile: IMobileStore;
}

interface IProps {
  children: JSX.Element;
}

const STORAGE: IStorage = {
  web: webStore,
  mobile: mobileStore,
};

import AppContext from './AppContext';
import {getUserList} from '../api/api';

const initialValue: object[] = [];

export default class AppProvider extends Component {
  state = {
    device: 'mobile',
    auth: false,
    theme: 'light',
    isOnAutoTheme: false,
    lang: 'en',
    // app: {
    //   auth: false,
    //   theme: 'light',
    //   isOnAutoTheme: false,
    //   lang: 'en',
    // },
    data: initialValue,
    error: false,
    loading: false,
    getUserData: async () => {
      this.setState(prev => {
        return {...prev, loading: !this.state.loading};
      });
      try {
        const data = await getUserList();

        this.setState(prev => {
          return {...prev, data};
        });
      } catch (error) {
        this.setState(prev => {
          return {...prev, error};
        });
      } finally {
        this.setState(prev => {
          return {...prev, loading: !this.state.loading};
        });
      }
    },
    clearData: () => {
      this.setState(prev => {
        return {...prev, data: initialValue};
      });
    },
    load: (key: string) => {
      STORAGE[device].load(key);
    },
    save: (key: string, value: any) => {
      STORAGE[device].save(key, value);
    },
  };

  componentDidMount() {
    if (Platform.OS === 'web') {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState(prev => ({...prev, device: 'web'}));
      const getting = async (key: string) => await STORAGE.web.load(key);
      const data = getting('app');
      console.log('data mount', data);
    }
    const getting = async (key: string) => await STORAGE.mobile.load(key);
    getting('app').then(data => {
      console.log('data mount mobile', data);
      if (!data) {
        const dataApp = {
          auth: this.state.auth,
          theme: this.state.theme,
          isOnAutoTheme: this.state.isOnAutoTheme,
          lang: this.state.lang,
        };
        STORAGE.mobile.save('app', dataApp);
      }
      return data;
    });
  }

  componentDidUpdate(_: IProps, prevState: any) {
    if (prevState.app === '') {
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
