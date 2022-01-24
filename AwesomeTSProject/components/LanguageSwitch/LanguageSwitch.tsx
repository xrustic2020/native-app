import React, {useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './LanguageSwitch.style';
import btnSelect from '../SelectButton/SelectButton.style';
import {LANGUAGE} from '../../locales/constants';
import {localeContex} from '../../context/LocaleProvider';

const LanguageSwitch = (): JSX.Element => {
  const {language, changeLanguage, showLanguageSwitcher} =
    useContext(localeContex);

  const onChangeLanguage = (lang: keyof typeof LANGUAGE) => {
    if (language === LANGUAGE[lang]) {
      return;
    }
    changeLanguage(LANGUAGE[lang]);
  };

  const onPressRU = () => {
    onChangeLanguage(LANGUAGE.ru);
  };

  const onPressEN = () => {
    onChangeLanguage(LANGUAGE.en);
  };

  return (
    <View style={[styles.container, !showLanguageSwitcher && {opacity: 0}]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.btn, language === LANGUAGE.en && styles.active]}
        onPress={onPressEN}>
        <Text
          style={[styles.btnTitle, language === LANGUAGE.en && styles.active]}>
          EN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.btn, language === LANGUAGE.ru && styles.active]}
        onPress={onPressRU}>
        <Text
          style={[styles.btnTitle, language === LANGUAGE.ru && styles.active]}>
          RU
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageSwitch;
