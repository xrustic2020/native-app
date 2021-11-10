import React from 'react';
import {View, Switch, Text} from 'react-native';

import styles from './CustomSwitch.style';
import {colors} from '../../assets/constants/styles';

interface IProps {
  value: boolean;
  action: (value: boolean) => void;
  valid: boolean;
}

const CustomSwitch = ({value, action, valid}: IProps): JSX.Element => {
  const toggleSwitch = () => {
    action(!value);
  };

  return (
    <View style={styles.agreed}>
      <Switch
        trackColor={{false: colors.GREY, true: colors.LIGHT_VIOLET}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor={colors.GREY}
        onValueChange={toggleSwitch}
        value={value}
      />
      <Text
        style={[
          styles.agreedText,
          valid ? {color: colors.GREY} : {color: colors.RED},
        ]}>
        I agree to the terms of service
      </Text>
    </View>
  );
};

export default CustomSwitch;
