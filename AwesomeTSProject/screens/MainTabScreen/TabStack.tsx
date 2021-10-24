import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Screen from './CreateScreen';

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Stack"
      screenOptions={{
        tabBarActiveTintColor: 'violet',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Stack"
        component={Screen}
        options={{
          title: 'Stack',
        }}
      />
      <Tab.Screen name="Registration" component={Screen} />
      <Tab.Screen name="Three" component={Screen} />
      <Tab.Screen name="Four" component={Screen} />
      <Tab.Screen name="Five" component={Screen} />
    </Tab.Navigator>
  );
};

export default TabStack;
