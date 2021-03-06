import React, {useState, useContext} from 'react';
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
import styles from './ValidationScreen.styles';

import CustomInput from '../../../../components/CustomInput/CustomInput';
import DateAndTimePicker from '../../../../components/DateAndTimePicker/DateAndTimePicker';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import RadioSelect from '../../../../components/RadioSelect/RadioSelect';
import CustomSwitch from '../../../../components/CustomSwitch/CustomSwitch';
import {localeContex} from '../../../../context/LocaleProvider';

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
  const {translate} = useContext(localeContex);

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

  const onChangeAgreements = (value: boolean) => {
    setAgreements(value);
    const {success} = schemas.agreements.safeParse(value);
    setValidation(prev => ({...prev, agreements: success}));
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
    const values = Object.keys(validateFields).map(item => {
      const {success} = schemas[item].safeParse(validateFields[item]);
      setValidation(prev => ({...prev, [item]: success}));
      return success;
    });
    const isPassedValidation = values.every(item => item === true);
    if (isPassedValidation) {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.LIGHT_VIOLET} />
      <ScrollView style={styles.form}>
        <CustomInput
          title={translate.nameFieldPlaceholder}
          value={name}
          onChange={onChangeName}
          valid={!validation.name}
          validationMessage={translate.nameFieldValidMessage}
        />
        <CustomInput
          title={translate.emailFieldPlaceholder}
          value={email}
          onChange={onChangeEmail}
          valid={!validation.email}
          validationMessage={translate.emailFieldValidMessage}
          keyboardType="email-address"
        />
        <CustomInput
          title={translate.phoneFieldPlaceholder}
          value={phone}
          onChange={onChangePhone}
          valid={!validation.phone}
          validationMessage={translate.phoneFieldValidMessage}
          keyboardType="phone-pad"
        />
        <CustomInput
          title={translate.passwordFieldPlaceholder}
          value={password}
          onChange={onChangePassword}
          valid={!validation.password}
          validationMessage={translate.passwordFieldValidMessage}
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
          action={onChangeAgreements}
          valid={validation.agreements}
        />
      </ScrollView>

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.btnTitle}>{translate.sendBtn}</Text>
      </Pressable>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalContentBox}>
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
              style={styles.closeBtn}>
              <Text style={styles.modalBtnText}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ValidationScreen;
