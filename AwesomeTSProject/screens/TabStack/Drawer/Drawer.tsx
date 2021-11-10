import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import CreatePostScreen from '../Stack/CreatePost/CreatePostScreen';
import PostsScreen from '../Stack/Posts/PostsScreen';
import ImagesScreen from './ImagesScreen/ImagesScreen';
import LayoutScreen from './LayoutScreen/LayoutScreen';
import ContexScreen from './ContexScreen/ContexScreen';

import AllPostsIcon from '../../../images/icons/align-center.svg';
import AddedPostIcon from '../../../images/icons/plus-square.svg';
import ImagesIcon from '../../../images/icons/images.svg';
import LayoutIcon from '../../../images/icons/align-right.svg';
import InternetIcon from '../../../images/icons/at.svg';

import {colors} from '../../../assets/constants/styles';

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName={'Posts'}
        screenOptions={{
          drawerStyle: {
            backgroundColor: colors.NEUTRAL_VIOLET,
            width: 200,
          },
          drawerType: 'front',
          drawerActiveTintColor: colors.WHITE,
          headerTintColor: colors.WHITE,
          headerStyle: {backgroundColor: colors.LIGHT_VIOLET},
        }}>
        <Drawer.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <AllPostsIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Create Post"
          component={CreatePostScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <AddedPostIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Images"
          component={ImagesScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <ImagesIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Layouts"
          component={LayoutScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <LayoutIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Context"
          component={ContexScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <InternetIcon width={size} height={size} fill={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerComponent;
