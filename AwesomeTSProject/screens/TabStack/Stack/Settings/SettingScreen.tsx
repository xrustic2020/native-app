/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {placeholders, colors} from '../../../../assets/constants/styles';

import ThemeSwitcher from '../../../../components/ThemeSwitcher/ThemeSwitcher';
import LanguageSwitch from '../../../../components/LanguageSwitch/LanguageSwitch';
import {themeContext} from '../../../../context/ThemeProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    ...placeholders.FLEX_CENTER_CENTER,
    backgroundColor: colors.WHITE_MORE,
  },
  container_dark: {
    backgroundColor: colors.GREY_MORE,
  },
  innerBox: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 50,
    minHeight: 50,
    borderWidth: 1,
    borderColor: colors.LIGHT_VIOLET,
    borderRadius: 10,
    position: 'relative',
  },
  boxHeading: {
    position: 'absolute',
    left: 14,
    top: -16,
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: colors.WHITE_MORE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxHeading_dark: {
    backgroundColor: colors.GREY_MORE,
    color: colors.WHITE,
  },
  boxRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  setingTitle_dark: {
    color: colors.WHITE,
  },
});

const SettingScreen = () => {
  const {theme, autoSetTheme, toggleAutoSetTheme} = useContext(themeContext);
  return (
    <View style={[styles.container, theme === 'dark' && styles.container_dark]}>
      <View style={styles.innerBox}>
        <Text
          style={[
            styles.boxHeading,
            theme === 'dark' && styles.boxHeading_dark,
          ]}>
          Color Scheme
        </Text>
        <View style={styles.boxRow}>
          <Text style={[theme === 'dark' && styles.setingTitle_dark]}>
            Use Devices Theme:
          </Text>
          <Switch
            value={autoSetTheme}
            onValueChange={toggleAutoSetTheme}
            trackColor={{false: colors.GREY, true: colors.LIGHT_VIOLET}}
            thumbColor={autoSetTheme ? colors.VIOLET : '#f4f3f4'}
          />
        </View>

        <View style={[styles.boxRow, {marginBottom: 0}]}>
          <Text style={[theme === 'dark' && styles.setingTitle_dark]}>
            Choose Theme Manually:
          </Text>
          <ThemeSwitcher />
        </View>
      </View>

      <View style={styles.innerBox}>
        <Text
          style={[
            styles.boxHeading,
            theme === 'dark' && styles.boxHeading_dark,
          ]}>
          Language
        </Text>
        <View style={[styles.boxRow, {marginBottom: 0}]}>
          <Text style={[theme === 'dark' && styles.setingTitle_dark]}>
            Choose Language:
          </Text>
          <LanguageSwitch />
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;
