import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './BottomNavigation-style';

interface IProps {
  navigator: any;
  goTo: 'Login' | 'Registration';
}

const BottomNavigation = ({navigator, goTo}: IProps) => {
  const text =
    goTo === 'Login'
      ? 'Have a register? Cool, follow here:'
      : 'Not registered? It`s easy, follow here:';
  return (
    <>
      <Text style={styles.notRegisterText}>{text}</Text>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.signUpBtn}
        onPress={() => navigator(`${goTo}`)}>
        <Text style={styles.signUpBtnTitle}>{goTo.toLocaleUpperCase()}</Text>
      </TouchableOpacity>
    </>
  );
};

export default BottomNavigation;
