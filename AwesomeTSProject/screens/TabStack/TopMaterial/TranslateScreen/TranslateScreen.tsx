// @flow
import React, {useContext} from 'react';
import {View, SafeAreaView, Text, Button} from 'react-native';

import {localeContex} from '../../../../context/LocaleProvider';
import styles from './TranslateScreen.style';

const TranslateScreen = (): JSX.Element => {
  const {translate} = useContext(localeContex);

  const userName = 'Gregory';

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Button onPress={() => {}} title={translate.button} />
        <Text>{translate.welcome(userName)}</Text>
        <Text style={styles.title}>{translate.title}</Text>
        <Text>{translate.canBuy(1)}</Text>
        <Text>{translate.canBuy(15)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TranslateScreen;
