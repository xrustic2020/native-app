import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import {colors, placeholders} from '../../../assets/constants/styles';

interface IProps {
  navigation: any;
}

const ModalScreen = ({navigation}: IProps) => {
  return (
    <Pressable style={s.overlay} onPress={() => navigation.goBack()}>
      <View style={s.container}>
        <Text>Modal Window</Text>
      </View>
    </Pressable>
  );
};

const s = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  container: {
    width: 200,
    height: 200,
    ...placeholders.FLEX_CENTER_CENTER,
    backgroundColor: colors.WHITE,
  },
});

export default ModalScreen;
