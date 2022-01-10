import React from 'react';
import {View, StyleSheet} from 'react-native';

const FILL_EMPTY_ARRAY_LENGTH = new Array(14).fill('id');

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  emptyBox: {
    width: '100%',
    height: 50,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    marginBottom: 10,
  },
});

const FillingLayout = () => {
  return (
    <View style={styles.container}>
      {FILL_EMPTY_ARRAY_LENGTH.map((el, index) => (
        <View key={`${el}${index}`} style={styles.emptyBox} />
      ))}
    </View>
  );
};

export default FillingLayout;
