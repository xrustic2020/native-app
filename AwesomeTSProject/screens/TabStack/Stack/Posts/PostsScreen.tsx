import React, {useContext} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

import AuthContext from '../../../../context/AuthContext';
import Icon from '../../../../images/icons/ad.svg';

import NavigateButton from '../../../../components/NavigateButton/NavigateButton';
import SolidButton from '../../../../components/SolidButton/SolidButton';

import {placeholders, fonts, colors} from '../../../../assets/constants/styles';

interface IProps {
  navigation: any;
}

const Posts = ({navigation}: IProps) => {
  const context = useContext(AuthContext);
  return (
    <SafeAreaView style={s.container}>
      <Text style={s.heading}>My Posts</Text>
      <SolidButton text={'logout'} action={context.logOut} />
      <SolidButton
        text={'modals View'}
        action={() => navigation.navigate('TransparentModal')}
      />
      <SolidButton
        text={'open native Modal'}
        action={() => navigation.navigate('Modal')}
      />
      <Icon fill={colors.BLACK} width={100} height={100} style={s.icon} />
      <NavigateButton text={'Create Post'} action={navigation.navigate} />
    </SafeAreaView>
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
  icon: {
    marginBottom: 40,
  },
});

export default Posts;
