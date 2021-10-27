import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CreatePostScreen from '../Stack/CreatePost/CreatePostScreen';
import PostsScreen from '../Stack/Posts/PostsScreen';

import {colors} from '../../../assets/constants/styles';

const Stack = createNativeStackNavigator();

const CreateScreen = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={'Posts'}
        screenOptions={{
          headerTintColor: colors.WHITE,
          headerStyle: {backgroundColor: colors.LIGHT_VIOLET},
        }}>
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
