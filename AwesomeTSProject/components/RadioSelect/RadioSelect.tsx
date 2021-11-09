import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import RadioButton from '../../components/RadioButton/RadioButton';

import styles from './RadioSelect.style';
import {SUBSCRIPTION} from '../../assets/constants/variablles';

interface IProps {
  value: string;
  action: (value: string) => void;
}

const RadioSelect = ({value, action}: IProps): JSX.Element => {
  return (
    <View style={styles.radio}>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => action(SUBSCRIPTION.free)}>
        <RadioButton value={SUBSCRIPTION.free} subscription={value} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => action(SUBSCRIPTION.enterprise)}>
        <RadioButton value={SUBSCRIPTION.enterprise} subscription={value} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => action(SUBSCRIPTION.vip)}>
        <RadioButton subscription={value} value={SUBSCRIPTION.vip} />
      </TouchableOpacity>
    </View>
  );
};

export default RadioSelect;
