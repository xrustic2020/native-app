import React, {useContext} from 'react';
import {View, Switch, Text} from 'react-native';

import styles from './CustomSwitch.style';
import {colors, placeholders} from '../../assets/constants/styles';
import {localeContex} from '../../context/LocaleProvider';
import {themeContext} from '../../context/ThemeProvider';

interface IProps {
  value: boolean;
  action: (value: boolean) => void;
  valid: boolean;
}

const CustomSwitch = ({value, action, valid}: IProps): JSX.Element => {
  const {translate} = useContext(localeContex);
  const {isDarkTheme} = useContext(themeContext);
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
          valid
            ? isDarkTheme
              ? placeholders.WHITE_TEXT_COLOR
              : {color: colors.GREY}
            : {color: colors.RED},
        ]}>
        {translate.agreedTerms}
      </Text>
    </View>
  );
};

export default CustomSwitch;
