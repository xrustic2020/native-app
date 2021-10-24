/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, Platform, KeyboardAvoidingView} from 'react-native';

import Field from '../../components/Field/Field';
import SignButton from '../../components/SignButton/SignButton';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import MainWrapper from '../../components/MainWrapper/MainWrapper';

interface Params {
  navigation: any;
}

const LoginScreen = ({navigation}: Params) => {
  return (
    <MainWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View>
          <Field name={'Name'} indent={20} />

          <Field name={'Email'} indent={20} />

          <Field name={'Password'} indent={20} />

          <SignButton value={'sign up'} />

          <BottomNavigation navigator={navigation.navigate} goTo={'Login'} />
        </View>
      </KeyboardAvoidingView>
    </MainWrapper>
  );
};

export default LoginScreen;
