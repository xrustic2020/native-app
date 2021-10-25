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
        labeled={false}
        shifting={true}>
        <Tab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            tabBarIcon: ({color}) => <AllPostsIcon fill={color} />,
            tabBarColor: 'violet',
            tabBarAccessibilityLabel: 'All Posts',
          }}
        />
        <Tab.Screen
          name="Create Post"
          component={CreatePostScreen}
          options={{
            tabBarIcon: ({color}) => <AddedPostIcon fill={color} />,
            tabBarColor: 'skyblue',
            tabBarAccessibilityLabel: 'Create Post',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TopMaterial;
