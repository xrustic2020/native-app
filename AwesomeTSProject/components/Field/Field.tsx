import React from 'react';
import {TextInput, Text, View} from 'react-native';

import styles from './Field-style';

interface IProps {
  name: string;
  indent?: number;
}

const Field = ({name, indent = 0}: IProps) => {
  return (
    <View style={{marginBottom: indent}}>
      <Text style={styles.label}>{name}</Text>
      <TextInput
        style={styles.input}
        placeholder={`please, enter here your ${name}`}
        secureTextEntry={name === 'Password'}
      />
    </View>
  );
};

export default Field;
