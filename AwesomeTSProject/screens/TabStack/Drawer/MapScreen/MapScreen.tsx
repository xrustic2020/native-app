import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigateButton from '../../../../components/NavigateButton/NavigateButton';

import {fonts, placeholders} from '../../../../assets/constants/styles';

interface IProps {
  navigation: any;
}

const MapScreen = ({navigation}: IProps) => {
  return (
    <View style={s.container}>
      <Text style={s.heading}>Map Screen</Text>
      {/* <Text style={s.message}>You can go to the all posts:</Text>
      <NavigateButton text={'Posts'} action={navigation.navigate} /> */}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  heading: {
    marginBottom: 50,
    fontSize: fonts.HEADING_SIZE,
    fontWeight: fonts.WEIGHT_SIZE,
  },
  message: {
    marginBottom: 10,
  },
});

export default MapScreen;
