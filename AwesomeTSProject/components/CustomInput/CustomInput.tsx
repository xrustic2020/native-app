import React, {useState, useRef} from 'react';
import {View, Text, TextInput} from 'react-native';
import s from './CustomInput.style';

interface IProps {
  title: string;
  value: string;
  onChange: any;
  keyboardType?: 'default' | 'email-address' | 'number-pad' | 'phone-pad';
  valid: boolean;
  validationMessage: string;
  secureTextEntry?: boolean;
}

const CustomInput = ({
  title,
  value,
  onChange,
  keyboardType = 'default',
  valid = true,
  validationMessage,
  secureTextEntry = false,
}: IProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();

  const toggleFocused = () => {
    setIsFocused(prev => !prev);
  };

  const isMovePlaceholder = () => {
    const condition = isFocused || value;
    if (condition) {
      return s.focusedInput;
    }
  };

  const initialRef = (elem: React.ReactNode) => {
    inputRef.current = elem;
  };

  const onChangeHandler = (text: string) => onChange(text);

  const focused = () => inputRef.current.focus();

  return (
    <View style={s.inputContainer}>
      <Text style={[s.placeholder, isMovePlaceholder()]} onPress={focused}>
        {title}
      </Text>
      <TextInput
        ref={initialRef}
        style={[s.textInput, valid && s.notValid]}
        onFocus={toggleFocused}
        onBlur={toggleFocused}
        value={value}
        onChangeText={onChangeHandler}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {valid && <Text style={s.notValid}>{validationMessage}</Text>}
    </View>
  );
};

export default CustomInput;
