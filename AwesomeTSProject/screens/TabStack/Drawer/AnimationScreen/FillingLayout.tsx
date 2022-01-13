import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors, placeholders} from '../../../../assets/constants/styles';

const FILL_EMPTY_ARRAY_LENGTH = new Array(14).fill('id');

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  emptyBox: {
    width: '100%',
    height: 50,
    backgroundColor: colors.LIGHT_BLUE,
    borderRadius: 10,
    marginBottom: 10,
    ...placeholders.FLEX_CENTER_CENTER,
  },
});

const FillingLayout = () => {
  return (
    <View style={styles.container}>
      {FILL_EMPTY_ARRAY_LENGTH.map((el, index) => (
        <View key={`${el}${index}`} style={styles.emptyBox}>
          <Text>Empty Box {`${index}`}</Text>
        </View>
      ))}
    </View>
  );
};

export default FillingLayout;
