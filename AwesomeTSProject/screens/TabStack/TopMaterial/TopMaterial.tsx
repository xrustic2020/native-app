import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CreatePostScreen from '../Stack/CreatePost/CreatePostScreen';
import PostsScreen from '../Stack/Posts/PostsScreen';

const Tab = createMaterialTopTabNavigator();

const TopMaterial = () => {
  return (
    <>
      <Tab.Navigator initialRouteName={'Posts'}>
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="Create Post" component={CreatePostScreen} />
      </Tab.Navigator>
    </>
  );
};

export default TopMaterial;
