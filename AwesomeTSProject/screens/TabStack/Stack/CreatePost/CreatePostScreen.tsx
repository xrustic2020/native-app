import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigateButton from '../../../../components/NavigateButton/NavigateButton';

interface IProps {
  navigation: any;
}

const PostsScreen = ({navigation}: IProps) => {
  return (
    <View style={s.container}>
      <Text style={s.heading}>Create Post Screen</Text>
      <Text style={s.message}>You cat go to the all posts:</Text>
      <NavigateButton text={'Posts'} action={navigation.navigate} />
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
  message: {
    marginBottom: 10,
  },
});

export default PostsScreen;
