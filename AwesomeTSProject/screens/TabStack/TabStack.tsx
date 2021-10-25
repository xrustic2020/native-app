import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Screen from './Stack/StackScreen';
import NativeStack from './NativeStack/NativeStack';
import Drawer from './Drawer/Drawer';
import TopMaterial from './TopMaterial/TopMaterial';
import BottomMaterial from './BottomMaterial/BottomMaterial';

import AdIcon from '../../images/icons/ad.svg';
import BookIcon from '../../images/icons/address-book.svg';
import CardIcon from '../../images/icons/address-card.svg';
import ChatIcon from '../../images/icons/comments.svg';
import MenuIcon from '../../images/icons/align-justify.svg';

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
          tabBarIcon: ({focused, size, color}) => {
            return <AdIcon width={size} height={size} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Native Stack"
        component={NativeStack}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return <BookIcon width={size} height={size} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Drawer"
        component={Drawer}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return <CardIcon width={size} height={size} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Four"
        component={TopMaterial}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return <ChatIcon width={size} height={size} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Five"
        component={BottomMaterial}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return <MenuIcon width={size} height={size} fill={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
