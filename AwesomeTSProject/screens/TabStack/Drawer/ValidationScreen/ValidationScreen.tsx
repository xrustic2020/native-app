import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Switch,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';

import {z} from 'zod';

import {colors} from '../../../../assets/constants/styles';

import s from './ValidationScreen.styles';

import CustomInput from '../../../../components/CustomInput/CustomInput';
import RadioButton from '../../../../components/RadioButton/RadioButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

const schemas = {
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(10),
  password: z.string().regex(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/),
};

const SUBSCRIPTION = {
  FREE: 'free',
  ENTERPRISE: 'enterprise',
  VIP: 'vip',
};

const ValidationScreen = () => {
  const [isActiveSwitch, setIsActiveSwitch] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [subscription, setSubscription] = useState(SUBSCRIPTION.FREE);

  const [validation, setValidation] = useState({
    name: true,
    email: true,
    phone: true,
    password: true,
  });

  const onChangeName = (value: string) => {
    setName(value);
    const {success} = schemas.name.safeParse(value);
    setValidation(prev => ({...prev, name: success}));
  };

  const onChangeEmail = (value: string) => {
    setEmail(value);
    const {success} = schemas.email.safeParse(value);
    setValidation(prev => ({...prev, email: success}));
  };

  const onChangePhone = (value: string) => {
    setPhone(value);
    const {success} = schemas.phone.safeParse(value);
    setValidation(prev => ({...prev, phone: success}));
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
    const {success} = schemas.password.safeParse(value);
    setValidation(prev => ({...prev, password: success}));
  };

  const toggleSwitch = () => {
    setIsActiveSwitch(!isActiveSwitch);
  };

  const handleSubmit = () => {
    console.log('validation:', validation);
    const values = Object.values(validation);
    console.log('values', values);
    const result = values.every(el => {
      console.log('el === true', el === true);
      el === true;
    });
    console.log('result', result);
    if (result) {
      Alert.alert('Validation OK :)');
    }
  };

  return (
    <View style={s.container}>
      <StatusBar backgroundColor={colors.LIGHT_VIOLET} />
      <ScrollView style={s.form}>
        <CustomInput
          title="Name"
          value={name}
          onChange={onChangeName}
          valid={!validation.name}
          validationMessage={'Should be at least 3 characters'}
        />
        <CustomInput
          title="Email"
          value={email}
          onChange={onChangeEmail}
          valid={!validation.email}
          validationMessage={'Invalid Email'}
          keyboardType="email-address"
        />
        <CustomInput
          title="Phone"
          value={phone}
          onChange={onChangePhone}
          valid={!validation.phone}
          validationMessage={'Should be at least 10 characters'}
          keyboardType="phone-pad"
        />
        <CustomInput
          title="Password"
          value={password}
          onChange={onChangePassword}
          valid={!validation.password}
          validationMessage={
            'Should be at least 8 characters (one upper and one lowercase letter, and at least one number)'
          }
          secureTextEntry={true}
        />
        <View style={s.radio}>
          <TouchableOpacity
            style={s.radioButton}
            onPress={() => setSubscription(SUBSCRIPTION.FREE)}>
            <RadioButton
              value={SUBSCRIPTION.FREE}
              subscription={subscription}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={s.radioButton}
            onPress={() => setSubscription(SUBSCRIPTION.ENTERPRISE)}>
            <RadioButton
              value={SUBSCRIPTION.ENTERPRISE}
              subscription={subscription}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={s.radioButton}
            onPress={() => setSubscription(SUBSCRIPTION.VIP)}>
            <RadioButton subscription={subscription} value={SUBSCRIPTION.VIP} />
          </TouchableOpacity>
        </View>

        <View style={s.agreed}>
          <Switch
            trackColor={{false: colors.GREY, true: colors.LIGHT_VIOLET}}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor={colors.GREY}
            onValueChange={toggleSwitch}
            value={isActiveSwitch}
          />
          <Text style={[s.agreedText, isActiveSwitch && {color: 'limegreen'}]}>
            I agree to the terms of service
          </Text>
        </View>
      </ScrollView>
      <Pressable style={s.button} onPress={handleSubmit}>
        <Text style={s.btnTitle}>SEND</Text>
      </Pressable>
    </View>
  );
};

export default ValidationScreen;
