import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import s from './NavigateButton-style';

interface IProps {
  text: string;
  action: any;
}

const NavigateButton = ({text, action}: IProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={s.btn} onPress={action}>
      <Text style={s.btnTitle}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default NavigateButton;
