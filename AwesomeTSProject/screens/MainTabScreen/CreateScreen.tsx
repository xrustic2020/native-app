import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import AuthContext from '../../context/AuthContext';

const CreateScreen = () => {
  const context = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>CreateScreen</Text>
      <Button title={'logout'} onPress={() => context.logOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateScreen;
