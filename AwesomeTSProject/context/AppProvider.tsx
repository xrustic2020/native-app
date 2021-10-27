import React, {Component} from 'react';
import AppContext from './AppContext';

const initialValue: object[] = [];

export default class AppProvider extends Component {
  state = {
    data: initialValue,
    error: false,
    loading: false,
    getUserData: async () => {
      this.setState(prev => {
        return {...prev, loading: !this.state.loading};
      });
      try {
        const data = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        ).then(res => res.json());
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
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
