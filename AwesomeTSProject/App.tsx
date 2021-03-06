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
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from './context/AuthProvider';
import AppProvider from './context/AppProvider';
import LocaleProvider from './context/LocaleProvider';

import AuthCheck from './components/AuthCheck/AuthCheck';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <AppProvider>
        <LocaleProvider>
          <NavigationContainer>
            <AuthCheck />
          </NavigationContainer>
        </LocaleProvider>
      </AppProvider>
    </AuthProvider>
  );
};

export default App;
