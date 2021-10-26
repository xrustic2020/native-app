import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import CreatePostScreen from '../Stack/CreatePost/CreatePostScreen';
import PostsScreen from '../Stack/Posts/PostsScreen';
import ImagesScreen from './ImagesScreen/ImagesScreen';

import AllPostsIcon from '../../../images/icons/align-center.svg';
import AddedPostIcon from '../../../images/icons/plus-square.svg';
import ImagesIcon from '../../../images/icons/images.svg';

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
          drawerActiveTintColor: '#ffffff',
          headerTintColor: '#ffffff',
          headerStyle: {backgroundColor: '#ee82ee'},
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
        <Drawer.Screen
          name="Images"
          component={ImagesScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <ImagesIcon width={size} height={size} fill={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerComponent;
