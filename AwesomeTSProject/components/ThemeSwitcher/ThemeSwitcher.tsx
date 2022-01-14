import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, placeholders} from '../../assets/constants/styles';
import {THEME, themeContext} from '../../context/ThemeProvider';

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switcher: {
    width: 45,
    height: '100%',
    borderWidth: 2,
    borderColor: colors.LIGHT_GREY,
    borderRadius: 6,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  switcher_dark: {
    borderColor: colors.LIGHT_VIOLET,
    backgroundColor: colors.LIGHT_VIOLET,
  },
  switcherTitle: {
    color: colors.GREY,
    fontWeight: 'bold',
  },
  switcherTitle_dark: {
    color: colors.WHITE,
  },
});

const ThemeSwitcher = () => {
  const {theme, autoSetTheme, changeThemeToLight, changeThemeToDark} =
    useContext(themeContext);

  const isDarkTheme = theme === THEME.dark;

  const onPressLight = () => {
    if (!autoSetTheme && theme !== THEME.light) {
      changeThemeToLight();
    }
  };

  const onPressDark = () => {
    if (!autoSetTheme && theme !== THEME.dark) {
      changeThemeToDark();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.switcher,
          !autoSetTheme && isDarkTheme && styles.switcher_dark,
        ]}
        onPress={onPressDark}>
        <Text
          style={[styles.switcherTitle, isDarkTheme && {color: colors.WHITE}]}>
          dark
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.switcher,
          !autoSetTheme && !isDarkTheme && styles.switcher_dark,
        ]}
        onPress={onPressLight}>
        <Text
          style={[
            styles.switcherTitle,
            !autoSetTheme && {
              color: isDarkTheme ? colors.LIGHT_GREY : colors.WHITE,
            },
          ]}>
          light
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeSwitcher;
