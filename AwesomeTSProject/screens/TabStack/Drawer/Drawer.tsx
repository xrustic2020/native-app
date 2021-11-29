import React, {useContext} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import CreatePostScreen from '../Stack/CreatePost/CreatePostScreen';
import PostsScreen from '../Stack/Posts/PostsScreen';
import ImagesScreen from './ImagesScreen/ImagesScreen';
import LayoutScreen from './LayoutScreen/LayoutScreen';
import ContexScreen from './ContexScreen/ContexScreen';
import ValidationScreen from './ValidationScreen/ValidationScreen';
import WebViewScreen from './WebViewScreen/WebViewScreen';

import AllPostsIcon from '../../../images/icons/align-center.svg';
import AddedPostIcon from '../../../images/icons/plus-square.svg';
import ImagesIcon from '../../../images/icons/images.svg';
import LayoutIcon from '../../../images/icons/align-right.svg';
import InternetIcon from '../../../images/icons/at.svg';
import ValidationIcon from '../../../images/icons/newspaper.svg';
import WebViewIcon from '../../../images/icons/laptop-code.svg';

import {colors} from '../../../assets/constants/styles';
import {localeContex} from '../../../context/LocaleProvider';

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  const {translate} = useContext(localeContex);
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
            title: translate.posts,
            drawerIcon: ({color, size}) => (
              <AllPostsIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Create Post"
          component={CreatePostScreen}
          options={{
            title: translate.createPost,
            drawerIcon: ({color, size}) => (
              <AddedPostIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Images"
          component={ImagesScreen}
          options={{
            title: translate.imageScreen,
            drawerIcon: ({color, size}) => (
              <ImagesIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Layouts"
          component={LayoutScreen}
          options={{
            title: translate.layoutScreen,
            drawerIcon: ({color, size}) => (
              <LayoutIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Context"
          component={ContexScreen}
          options={{
            title: translate.contexScreen,
            drawerIcon: ({color, size}) => (
              <InternetIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Validation"
          component={ValidationScreen}
          options={{
            title: translate.validationScreen,
            drawerIcon: ({color, size}) => (
              <ValidationIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Web View"
          component={WebViewScreen}
          options={{
            title: translate.webWiewScren,
            drawerIcon: ({color, size}) => (
              <WebViewIcon width={size} height={size} fill={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerComponent;
