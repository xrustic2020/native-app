import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {colors, placeholders} from '../../assets/constants/styles';
import {themeContext} from '../../context/ThemeProvider';

import styles from './RadioButton.style';

interface IProps {
  value: string;
  subscription: string;
}

const RadioButton = ({value, subscription}: IProps) => {
  const {isDarkTheme} = useContext(themeContext);
  const selected = subscription === value;
  return (
    <>
      <View
        style={[
          styles.circle,
          selected && (isDarkTheme ? styles.selected_dark : styles.selected),
        ]}>
        {selected ? (
          <View
            style={[
              styles.innerCircle,
              isDarkTheme && {backgroundColor: colors.LIGHT_VIOLET},
            ]}
          />
        ) : null}
      </View>
      <Text style={[styles.text, isDarkTheme && placeholders.WHITE_TEXT_COLOR]}>
        {value.toLocaleUpperCase()}
      </Text>
    </>
  );
};

export default RadioButton;
