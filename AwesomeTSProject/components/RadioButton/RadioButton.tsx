import React from 'react';
import {View, Text} from 'react-native';

import s from './RadioButton.style';

interface IProps {
  value: string;
  subscription: string;
}

const RadioButton = ({value, subscription}: IProps) => {
  const selected = subscription === value;
  return (
    <>
      <View style={[s.circle, selected && s.selected]}>
        {selected ? <View style={s.innerCircle} /> : null}
      </View>
      <Text style={s.text}>{value.toLocaleUpperCase()}</Text>
    </>
  );
};

export default RadioButton;
