import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import CreatePostScreen from '../Stack/CreatePost/CreatePostScreen';
import PostsScreen from '../Stack/Posts/PostsScreen';

import AllPostsIcon from '../../../images/icons/align-center.svg';
import AddedPostIcon from '../../../images/icons/plus-square.svg';

const Drawer = createDrawerNavigator();

const CreateScreen = () => {
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
        }}>
        <Drawer.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <AllPostsIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Create Post"
          component={CreatePostScreen}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <AddedPostIcon width={size} height={size} fill={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default CreateScreen;
