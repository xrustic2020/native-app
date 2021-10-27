import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import CreatePostScreen from './CreatePost/CreatePostScreen';
import PostsScreen from './Posts/PostsScreen';
import ModalScreen from '../ModalScreen/ModalScreen';
import Modal from '../NativeModal/NativeModal';

import {colors} from '../../../assets/constants/styles';

const Stack = createStackNavigator();

const CreateScreen = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={'Posts'}
        screenOptions={{
          headerTintColor: colors.WHITE,
          headerStyle: {backgroundColor: colors.LIGHT_VIOLET},
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
            name="TransparentModal"
            component={ModalScreen}
            options={{
              gestureDirection: 'vertical',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Modal"
            component={Modal}
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
