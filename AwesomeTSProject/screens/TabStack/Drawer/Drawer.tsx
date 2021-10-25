import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import CreatePostScreen from '../Stack/CreatePost/CreatePostScreen';
import PostsScreen from '../Stack/Posts/PostsScreen';

import AllPostsIcon from '../../../images/icons/align-center.svg';
import AddedPostIcon from '../../../images/icons/plus-square.svg';

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName={'Posts'}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 200,
          },
          drawerType: 'front',
          drawerActiveTintColor: 'white',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'violet'},
        }}>
        <Drawer.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <AllPostsIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Create Post"
          component={CreatePostScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <AddedPostIcon width={size} height={size} fill={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerComponent;
