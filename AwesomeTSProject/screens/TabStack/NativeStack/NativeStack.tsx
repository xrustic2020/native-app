import React, {useContext} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CreatePostScreen from '../Stack/CreatePost/CreatePostScreen';
import PostsScreen from '../Stack/Posts/PostsScreen';
import SettingScreen from '../Stack/Settings/SettingScreen';

import {colors} from '../../../assets/constants/styles';
import {localeContex} from '../../../context/LocaleProvider';

const Stack = createNativeStackNavigator();

const CreateScreen = () => {
  const {translate} = useContext(localeContex);
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
          options={{title: translate.posts}}
        />
        <Stack.Screen
          name="Create Post"
          component={CreatePostScreen}
          options={{title: translate.createPost}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={{title: translate.settingScreen}}
        />
      </Stack.Navigator>
    </>
  );
};

export default CreateScreen;
