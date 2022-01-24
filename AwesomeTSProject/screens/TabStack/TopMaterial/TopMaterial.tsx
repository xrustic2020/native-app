import React, {useContext} from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CreatePostScreen from '../Stack/CreatePost/CreatePostScreen';
import PostsScreen from '../Stack/Posts/PostsScreen';
import TranslateScreen from './TranslateScreen/TranslateScreen';
import {themeContext} from '../../../context/ThemeProvider';
import {colors} from '../../../assets/constants/styles';

const Tab = createMaterialTopTabNavigator();

const TopMaterial = () => {
  const {isDarkTheme} = useContext(themeContext);
  return (
    <>
      <Tab.Navigator
        initialRouteName={'Posts'}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: isDarkTheme ? colors.GREY : colors.WHITE,
          },
          tabBarLabelStyle: {
            color: isDarkTheme ? colors.WHITE : colors.GREY,
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.LIGHT_VIOLET,
          },
        }}>
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="Create Post" component={CreatePostScreen} />
        <Tab.Screen name="Translater" component={TranslateScreen} />
      </Tab.Navigator>
    </>
  );
};

export default TopMaterial;
