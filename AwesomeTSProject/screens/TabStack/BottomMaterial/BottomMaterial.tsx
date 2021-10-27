import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import CreatePostScreen from '../Stack/CreatePost/CreatePostScreen';
import PostsScreen from '../Stack/Posts/PostsScreen';

import AllPostsIcon from '../../../images/icons/align-center.svg';
import AddedPostIcon from '../../../images/icons/plus-square.svg';

import {colors} from '../../../assets/constants/styles';

const Tab = createMaterialBottomTabNavigator();

const BottomMaterial = () => {
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
            tabBarColor: colors.LIGHT_VIOLET,
            tabBarAccessibilityLabel: 'All Posts',
          }}
        />
        <Tab.Screen
          name="Create Post"
          component={CreatePostScreen}
          options={{
            tabBarIcon: ({color}) => <AddedPostIcon fill={color} />,
            tabBarColor: colors.LIGHT_BLUE,
            tabBarAccessibilityLabel: 'Create Post',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomMaterial;
