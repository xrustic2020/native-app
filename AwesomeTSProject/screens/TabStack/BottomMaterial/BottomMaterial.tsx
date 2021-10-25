import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import CreatePostScreen from '../Stack/CreatePost/CreatePostScreen';
import PostsScreen from '../Stack/Posts/PostsScreen';

import AllPostsIcon from '../../../images/icons/align-center.svg';
import AddedPostIcon from '../../../images/icons/plus-square.svg';

const Tab = createMaterialBottomTabNavigator();

const TopMaterial = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={'Posts'}
        barStyle={{paddingBottom: 20}}
        labeled={false}>
        <Tab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <AllPostsIcon fill={color} width={size} height={size} />
            ),
            tabBarColor: 'violet',
          }}
        />
        <Tab.Screen
          name="Create Post"
          component={CreatePostScreen}
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <AddedPostIcon fill={color} width={size} height={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TopMaterial;
