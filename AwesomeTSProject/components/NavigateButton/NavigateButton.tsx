import React, {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {themeContext} from '../../context/ThemeProvider';

import styles from './NavigateButton.style';

interface IProps {
  text: string;
  action: any;
}

const NavigateButton = ({text, action}: IProps) => {
  const {isDarkTheme} = useContext(themeContext);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.btn, isDarkTheme && styles.btn_dark]}
      onPress={action}>
      <Text style={[styles.btnTitle, isDarkTheme && styles.btnTitle_dark]}>
        {text.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default NavigateButton;
