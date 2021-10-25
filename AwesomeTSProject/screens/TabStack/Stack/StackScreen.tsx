import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import CreatePostScreen from './CreatePost/CreatePostScreen';
import PostsScreen from './Posts/PostsScreen';
import ModalScreen from '../ModalScreen/ModalScreen';

const Stack = createStackNavigator();

const CreateScreen = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={'Posts'}
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'violet'},
        }}>
        <Stack.Group>
          <Stack.Screen
            name="Posts"
            component={PostsScreen}
            options={{
              title: 'Posts',
            }}
          />
          <Stack.Screen name="Create Post" component={CreatePostScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
          <Stack.Screen
            name="Modal"
            component={ModalScreen}
            options={{
              gestureDirection: 'vertical',
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};

export default CreateScreen;
