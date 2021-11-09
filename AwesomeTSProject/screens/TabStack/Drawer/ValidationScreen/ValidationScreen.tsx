import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Pressable,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {z} from 'zod';

import {SUBSCRIPTION} from '../../../../assets/constants/variablles';
import {colors} from '../../../../assets/constants/styles';
import s from './ValidationScreen.styles';

import CustomInput from '../../../../components/CustomInput/CustomInput';
import DateAndTimePicker from '../../../../components/DateAndTimePicker/DateAndTimePicker';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import RadioSelect from '../../../../components/RadioSelect/RadioSelect';
import CustomSwitch from '../../../../components/CustomSwitch/CustomSwitch';

const schemas: {[key: string]: z.ZodString | z.ZodLiteral<true>} = {
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(10),
  password: z.string().regex(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/),
  hobby: z.string().nonempty(),
  agreements: z.literal(true),
};

const ValidationScreen = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [hobby, setHobby] = useState('');
  const [subscription, setSubscription] = useState(SUBSCRIPTION.free);
  const [date, setDate] = useState(new Date());
  const [agreements, setAgreements] = useState(false);
  const [validation, setValidation] = useState({
    name: true,
    email: true,
    phone: true,
    password: true,
    hobby: true,
    agreements: true,
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

  const onChangeHobby = (value: string) => {
    setHobby(value);
    const {success} = schemas.hobby.safeParse(value);
    setValidation(prev => ({...prev, hobby: success}));
  };

  const handleSubmit = () => {
    const validateFields: {[key: string]: string | boolean} = {
      name,
      email,
      phone,
      password,
      hobby,
      agreements,
    };
    const res = Object.keys(validateFields);
    const isPassedValidation = res.some(item => {
      const {success} = schemas[item].safeParse(validateFields[item]);
      setValidation(prev => ({...prev, [item]: success}));
      return success === false;
    });
    if (!isPassedValidation) {
      setModalVisible(true);
    }
  };

  return (
    <View style={s.container}>
      <StatusBar backgroundColor={colors.LIGHT_VIOLET} />
      <ScrollView style={s.form}>
        <CustomInput
          title="Name*"
          value={name}
          onChange={onChangeName}
          valid={!validation.name}
          validationMessage={'Should be at least 3 characters'}
        />
        <CustomInput
          title="Email*"
          value={email}
          onChange={onChangeEmail}
          valid={!validation.email}
          validationMessage={'Invalid Email'}
          keyboardType="email-address"
        />
        <CustomInput
          title="Phone*"
          value={phone}
          onChange={onChangePhone}
          valid={!validation.phone}
          validationMessage={'Should be at least 10 characters'}
          keyboardType="phone-pad"
        />
        <CustomInput
          title="Password*"
          value={password}
          onChange={onChangePassword}
          valid={!validation.password}
          validationMessage={
            'Should be at least 8 characters (one upper and one lowercase letter, and at least one number)'
          }
          secureTextEntry={true}
        />

        <Dropdown
          value={hobby}
          action={onChangeHobby}
          valid={validation.hobby}
        />

        <RadioSelect value={subscription} action={setSubscription} />

        <DateAndTimePicker date={date} action={setDate} />

        <CustomSwitch
          value={agreements}
          action={setAgreements}
          valid={validation.agreements}
        />
      </ScrollView>

      <Pressable style={s.button} onPress={handleSubmit}>
        <Text style={s.btnTitle}>SEND</Text>
      </Pressable>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={s.modal}>
          <View style={s.modalContentBox}>
            <Text>{`Name: ${name}`}</Text>
            <Text>{`Email: ${email}`}</Text>
            <Text>{`Phone: ${phone}`}</Text>
            <Text>{`Password: ${password}`}</Text>
            <Text>{`Hobby: ${hobby}`}</Text>
            <Text>{`Subscription: ${subscription}`}</Text>
            <Text>{`Reminder: ${date}`}</Text>
            <Text>{`Agreements: ${agreements}`}</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={s.closeBtn}>
              <Text style={s.modalBtnText}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ValidationScreen;
