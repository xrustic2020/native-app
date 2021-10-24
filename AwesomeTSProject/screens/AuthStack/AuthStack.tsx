/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const NativeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default NativeStack;
