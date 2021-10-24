import React, {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import ctx from '../../context/AuthContext';

import styles from './SignButton-style';

interface IProps {
  value: string;
}

const SignButton = ({value}: IProps) => {
  const {logIn} = useContext(ctx);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.btn}
      onPress={() => logIn()}>
      <Text style={styles.btnTitle}>{value.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default SignButton;
