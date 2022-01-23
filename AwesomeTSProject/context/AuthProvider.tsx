import React, {Component} from 'react';
import AuthContext from './AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IState {
  isAuthorization: boolean;
  logIn: () => void;
  logOut: () => void;
}

interface IProps {
  children: JSX.Element;
}

export default class AuthProvider extends Component {
  state = {
    isAuthorization: false,
    logIn: () => {
      this.setState({isAuthorization: true});
    },
    logOut: () => {
      this.setState({isAuthorization: false});
    },
  };

  getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value === null) {
        console.log('NULL storage:', value);
        return;
      }
      console.log('starting storage:', value);
      return value;
    } catch (e) {
      console.log('Error getting data in storage');
    }
  };

  setStoreData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(`Error saving data (['${key}']: '${value}') in storage`);
    }
  };

  componentDidMount() {
    this.getData('auth').then(data => {
      if (data) {
        const result = JSON.parse(data);
        console.log('parsed Data from store', result);
        this.setState(prev => ({
          ...prev,
          isAuthorization: result.isAuthorization,
        }));
      }
      const updateStoreData = JSON.stringify({
        isAuthorization: this.state.isAuthorization,
      });
      this.setStoreData('auth', updateStoreData);
    });
  }

  componentDidUpdate(_: IProps, prevState: IState) {
    console.log('update components, State:', prevState);
    this.getData('auth').then(data => console.log('get store data:', data));
    if (this.state.isAuthorization !== prevState.isAuthorization) {
      console.log('is not equal', this.state.isAuthorization);
      const updateStoreData = JSON.stringify({
        isAuthorization: this.state.isAuthorization,
      });
      this.setStoreData('auth', updateStoreData);
    }
  }

  render() {
    console.log('get data in render', this.getData('auth'));
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
