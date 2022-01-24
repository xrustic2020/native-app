import React, {useContext} from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

import AuthContext from '../../../../context/AuthContext';
import {localeContex} from '../../../../context/LocaleProvider';
import {themeContext} from '../../../../context/ThemeProvider';
import Icon from '../../../../images/icons/ad.svg';
import SettingsIcon from '../../../../images/icons/cog-solid.svg';
import LogoutIcon from '../../../../images/icons/sign-out-alt-solid.svg';

import NavigateButton from '../../../../components/NavigateButton/NavigateButton';
import SolidButton from '../../../../components/SolidButton/SolidButton';

import {placeholders, fonts, colors} from '../../../../assets/constants/styles';

interface IProps {
  navigation: any;
}

const Posts = ({navigation}: IProps) => {
  const context = useContext(AuthContext);
  const {theme} = useContext(themeContext);
  const {translate} = useContext(localeContex);

  const isDarkTheme = theme === 'dark';
  return (
    <SafeAreaView
      style={[styles.container, isDarkTheme && styles.container_dark]}>
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <SettingsIcon
          width={30}
          height={30}
          fill={isDarkTheme ? colors.WHITE : colors.BLACK}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          context.logOut();
        }}>
        <LogoutIcon
          width={30}
          height={30}
          fill={isDarkTheme ? colors.WHITE : colors.BLACK}
        />
      </TouchableOpacity>

      <Text style={[styles.heading, isDarkTheme && styles.whiteColor]}>
        {translate.postsTitle}
      </Text>
      <SolidButton
        text={translate.viewModal}
        action={() => navigation.navigate('TransparentModal')}
      />
      <SolidButton
        text={translate.nativeModal}
        action={() => navigation.navigate('Modal')}
      />
      <Icon
        fill={isDarkTheme ? colors.WHITE : colors.BLACK}
        width={100}
        height={100}
        style={styles.icon}
      />
      <NavigateButton
        text={translate.createPost}
        action={() => navigation.navigate('Create Post')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...placeholders.FLEX_CENTER_CENTER,
    backgroundColor: colors.WHITE_MORE,
  },
  container_dark: {
    backgroundColor: colors.GREY_MORE,
  },
  settingsButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  heading: {
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: fonts.HEADING_SIZE,
  },
  icon: {
    marginBottom: 40,
  },
  whiteColor: {
    color: colors.WHITE,
  },
});

export default Posts;
