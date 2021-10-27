/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from './context/AuthProvider';
import AppProvider from './context/AppProvider';

import AuthCheck from './components/AuthCheck/AuthCheck';

const App = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <NavigationContainer>
          <AuthCheck />
        </NavigationContainer>
      </AppProvider>
    </AuthProvider>
  );
};

export default App;
