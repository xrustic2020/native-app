/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {i18n} from '@lingui/core';
import {I18nProvider} from '@lingui/react';
import * as plurals from 'make-plural/plurals';

i18n.loadLocaleData('ru', {plurals: plurals.ru});
i18n.loadLocaleData('en', {plurals: plurals.en});

i18n.load({
  en: require('./src/locales/en/messages'),
  ru: require('./src/locales/ru/messages'),
});
// i18n.load('en', require('./src/locales/en/messages'));
// i18n.load('ru', require('./src/locales/ru/messages'));
i18n.activate('en');

import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from './context/AuthProvider';
import AppProvider from './context/AppProvider';

import AuthCheck from './components/AuthCheck/AuthCheck';

const App = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <I18nProvider i18n={i18n} language="en">
          <NavigationContainer>
            <AuthCheck />
          </NavigationContainer>
        </I18nProvider>
      </AppProvider>
    </AuthProvider>
  );
};

export default App;
