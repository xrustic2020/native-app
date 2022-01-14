/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useContext} from 'react';
import {View, Platform, KeyboardAvoidingView} from 'react-native';

import Field from '../../components/Field/Field';
import SignButton from '../../components/SignButton/SignButton';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import MainWrapper from '../../components/MainWrapper/MainWrapper';

import LanguageSwitch from '../../components/LanguageSwitch/LanguageSwitch';
import {localeContex} from '../../context/LocaleProvider';

interface Params {
  navigation: any;
}

const LoginScreen = ({navigation}: Params) => {
  const {translate} = useContext(localeContex);
  return (
    <MainWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View>
          <Field name={translate.name} indent={20} />

          <Field name={translate.email} indent={20} />

          <Field name={translate.password} indent={20} />

          <SignButton value={translate.signUp} />

          <BottomNavigation navigator={navigation.navigate} goTo={'Login'} />
        </View>
      </KeyboardAvoidingView>
    </MainWrapper>
  );
};

export default LoginScreen;
