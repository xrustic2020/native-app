import React, {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {localeContex} from '../../context/LocaleProvider';

import s from './BottomNavigation-style';

interface IProps {
  navigator: any;
  goTo: 'Login' | 'Registration';
}

const BottomNavigation = ({navigator, goTo}: IProps) => {
  const {translate} = useContext(localeContex);
  const isLogin = goTo === 'Login';
  const text = isLogin ? translate.haveRegister : translate.notRegister;
  return (
    <>
      <Text style={s.notRegisterText}>{text}</Text>

      <TouchableOpacity
        activeOpacity={0.5}
        style={s.signUpBtn}
        onPress={() => navigator(`${goTo}`)}>
        <Text style={s.signUpBtnTitle}>
          {isLogin ? translate.signIn : translate.signUp}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default BottomNavigation;
