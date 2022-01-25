import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigateButton from '../../../../components/NavigateButton/NavigateButton';

import {colors, fonts, placeholders} from '../../../../assets/constants/styles';
import {localeContex} from '../../../../context/LocaleProvider';
import {themeContext} from '../../../../context/ThemeProvider';

interface IProps {
  navigation: any;
}

const PostsScreen = ({navigation}: IProps) => {
  const {isDarkTheme} = useContext(themeContext);
  const {translate} = useContext(localeContex);
  return (
    <View style={[styles.container, isDarkTheme && styles.container_dark]}>
      <Text style={[styles.heading, isDarkTheme && styles.whiteTextColor]}>
        {translate.createPostTitle}
      </Text>
      <Text style={[styles.message, isDarkTheme && styles.whiteTextColor]}>
        {translate.goToAllPost}
      </Text>
      <NavigateButton
        text={translate.posts}
        action={() => navigation.navigate('Posts')}
      />
    </View>
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
  heading: {
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: fonts.HEADING_SIZE,
  },
  message: {
    marginBottom: 10,
  },
  whiteTextColor: {
    color: colors.WHITE,
  },
});

export default PostsScreen;
