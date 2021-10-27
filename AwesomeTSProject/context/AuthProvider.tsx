import React, {Component} from 'react';
import AuthContext from './AuthContext';

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
  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
