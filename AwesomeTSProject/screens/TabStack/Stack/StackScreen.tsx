import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import CreatePostScreen from './CreatePost/CreatePostScreen';
import PostsScreen from './Posts/PostsScreen';

const Stack = createStackNavigator();

const CreateScreen = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={'Posts'}>
        <Stack.Screen
          name="Posts"
          component={PostsScreen}
          options={{title: 'Posts'}}
        />
        <Stack.Screen name="Create Post" component={CreatePostScreen} />
      </Stack.Navigator>
    </>
  );
};

export default CreateScreen;
