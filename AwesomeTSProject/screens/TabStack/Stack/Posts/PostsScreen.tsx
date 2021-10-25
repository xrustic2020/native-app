import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import AuthContext from '../../../../context/AuthContext';
import Icon from '../../../../images/icons/ad.svg';

import NavigateButton from '../../../../components/NavigateButton/NavigateButton';

interface IProps {
  navigation: any;
}

const Posts = ({navigation}: IProps) => {
  const context = useContext(AuthContext);
  return (
    <View style={s.container}>
      <Text style={s.heading}>My Posts</Text>
      <Button title={'logout'} onPress={() => context.logOut()} />
      <Icon fill={'#000'} width={100} height={100} style={s.icon} />
      <NavigateButton text={'Create Post'} action={navigation.navigate} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 24,
  },
  icon: {
    marginBottom: 40,
  },
});

export default Posts;
