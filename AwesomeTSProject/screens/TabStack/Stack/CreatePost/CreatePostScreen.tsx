import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigateButton from '../../../../components/NavigateButton/NavigateButton';

import {fonts, placeholders} from '../../../../assets/constants/styles';
import {localeContex} from '../../../../context/LocaleProvider';

interface IProps {
  navigation: any;
}

const PostsScreen = ({navigation}: IProps) => {
  const {translate} = useContext(localeContex);
  return (
    <View style={s.container}>
      <Text style={s.heading}>{translate.createPostTitle}</Text>
      <Text style={s.message}>{translate.goToAllPost}</Text>
      <NavigateButton
        text={translate.posts}
        action={() => navigation.navigate('Posts')}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  heading: {
    marginBottom: 50,
    fontWeight: fonts.WEIGHT_SIZE,
    fontSize: fonts.HEADING_SIZE,
  },
  message: {
    marginBottom: 10,
  },
});

export default PostsScreen;
