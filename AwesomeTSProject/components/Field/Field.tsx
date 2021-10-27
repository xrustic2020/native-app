import React from 'react';
import {TextInput, Text, View} from 'react-native';

import s from './Field-style';

interface IProps {
  name: string;
  indent?: number;
}

const Field = ({name, indent = 0}: IProps) => {
  return (
    <View style={{marginBottom: indent}}>
      <Text style={s.label}>{name}</Text>
      <TextInput
        style={s.input}
        placeholder={`please, enter here your ${name}`}
        secureTextEntry={name === 'Password'}
      />
    </View>
  );
};

export default Field;
