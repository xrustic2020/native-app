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

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/Login/LoginScreen';
import RegisterScreen from './screens/Register/RegisterScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          tabBarActiveTintColor: 'violet',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Logins',
            headerStyle: {
              backgroundColor: 'yellow',
            },
          }}
        />
        <Tab.Screen name="Registration" component={RegisterScreen} />
        <Tab.Screen name="Three" component={LoginScreen} />
        <Tab.Screen name="Four" component={RegisterScreen} />
        <Tab.Screen name="Five" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
