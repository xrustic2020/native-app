import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import s from './SelectButton-style';

interface IProps {
  value: number;
  action: any;
  active: number;
}

const SelectButton = ({value, action, active}: IProps) => {
  const isActive = active === value;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[s.btn, isActive && s.active]}
      onPress={() => action(value)}>
      <Text
        style={[s.btnTitle, isActive && s.active]}>{`${value} - COLUMN`}</Text>
    </TouchableOpacity>
  );
};

export default SelectButton;
