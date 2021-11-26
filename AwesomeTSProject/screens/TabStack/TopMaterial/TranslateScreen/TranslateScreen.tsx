// @flow
import React from 'react';
import {View, SafeAreaView, Text, Button} from 'react-native';
import {Trans} from '@lingui/macro';
import {useLingui} from '@lingui/react';

import styles from './TranslateScreen.style';

// import {i18n} from '@lingui/core';
import * as plurals from 'make-plural/plurals';

const TranslateScreen = (): JSX.Element => {
  const {i18n} = useLingui();
  console.log('i18n obj', i18n);

  const onChangeLang = async () => {
    // const {messages} = await import('../../../../src/locales/ru/messages');
    // i18n.load('ru', messages);
    console.log('change language');
    i18n.load('ru', await require('../../../../src/locales/ru/messages'));
    i18n.activate('ru');
    // i18n.activate('ru');
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Text>
          <Trans>Translate Screen new</Trans>
        </Text>
        <Button onPress={onChangeLang} title={i18n._('Change Language')} />
      </View>
    </SafeAreaView>
  );
};

export default TranslateScreen;
