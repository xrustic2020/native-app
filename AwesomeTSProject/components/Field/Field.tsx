import React, {useContext} from 'react';
import {TextInput, Text, View} from 'react-native';
import {localeContex} from '../../context/LocaleProvider';

import s from './Field-style';

interface IProps {
  name: string;
  indent?: number;
}

const Field = ({name, indent = 0}: IProps) => {
  const {translate} = useContext(localeContex);
  return (
    <View style={{marginBottom: indent}}>
      <Text style={s.label}>{name}</Text>
      <TextInput
        style={s.input}
        placeholder={translate.fieldPlaceholder(name)}
        secureTextEntry={name === translate.password}
      />
    </View>
  );
};

export default Field;
