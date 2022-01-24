import React, {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './SelectButton.style';
import {localeContex} from '../../context/LocaleProvider';

interface IProps {
  value: number;
  action: any;
  active: number;
}

const SelectButton = ({value, action, active}: IProps) => {
  const {translate} = useContext(localeContex);
  const isActive = active === value;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btn, isActive && styles.active]}
      onPress={() => action(value)}>
      <Text style={[styles.btnTitle, isActive && styles.active]}>
        {translate.columnBtn(value)}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectButton;
