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
// import {StyleSheet} from 'react-native';

import LoginScreen from '../Login/LoginScreen';
import RegisterScreen from '../Register/RegisterScreen';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const NativeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

// const styles = StyleSheet.create({
//   backgroundStyle: {
//     flex: 1,
//     textAlign: 'center',
//   },
// });

export default NativeStack;
