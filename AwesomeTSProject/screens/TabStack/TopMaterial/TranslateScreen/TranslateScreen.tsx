// @flow
import React, {useContext} from 'react';
import {View, SafeAreaView, Text, Button} from 'react-native';
import {placeholders} from '../../../../assets/constants/styles';

import {localeContex} from '../../../../context/LocaleProvider';
import {themeContext} from '../../../../context/ThemeProvider';
import styles from './TranslateScreen.style';

const TranslateScreen = (): JSX.Element => {
  const {translate} = useContext(localeContex);
  const {isDarkTheme} = useContext(themeContext);

  const userName = 'Gregory';

  return (
    <SafeAreaView style={styles.flex}>
      <View
        style={[styles.container, isDarkTheme && placeholders.DARK_BACKGROUND]}>
        <Button onPress={() => {}} title={translate.button} />
        <Text style={isDarkTheme && placeholders.WHITE_TEXT_COLOR}>
          {translate.welcome(userName)}
        </Text>
        <Text style={styles.title}>{translate.title}</Text>
        <Text style={isDarkTheme && placeholders.WHITE_TEXT_COLOR}>
          {translate.canBuy(1)}
        </Text>
        <Text style={isDarkTheme && placeholders.WHITE_TEXT_COLOR}>
          {translate.canBuy(15)}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TranslateScreen;
