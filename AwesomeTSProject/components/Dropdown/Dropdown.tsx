import React, {useState, useContext} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import AngleDownIcon from '../../images/icons/angle-down.svg';
import styles from './Dropdown.style';
import {colors, placeholders} from '../../assets/constants/styles';
import {localeContex} from '../../context/LocaleProvider';
import {themeContext} from '../../context/ThemeProvider';

const selectData = [
  {id: '1', value: 'Music'},
  {id: '2', value: 'Swimming'},
  {id: '3', value: 'Dance'},
  {id: '4', value: 'Programming'},
  {id: '5', value: 'Easy man :)'},
];

interface IProps {
  value: string;
  action: (value: string) => void;
  valid: boolean;
}

interface IListItem {
  id: string;
  value: string;
}

const Dropdown = ({value, action, valid}: IProps): JSX.Element => {
  const {translate} = useContext(localeContex);
  const {isDarkTheme} = useContext(themeContext);
  const [isShowSelect, setIsShowSelect] = useState(false);

  const onPressHandler = (item: IListItem) => {
    action(item.value);
    setIsShowSelect(false);
  };

  const colorIcon = valid
    ? isDarkTheme
      ? colors.WHITE
      : colors.GREY
    : colors.RED;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.select, !valid && {borderColor: colors.RED}]}
      onPress={() => setIsShowSelect(prev => !prev)}>
      <AngleDownIcon
        width={30}
        height={30}
        fill={colorIcon}
        style={styles.selectIcon}
      />
      <Text
        style={[
          styles.selectText,
          isDarkTheme && placeholders.WHITE_TEXT_COLOR,
        ]}>
        {value ? value : translate.hobbySelectPlaceholder}
      </Text>
      <View style={[styles.selectList, !isShowSelect && styles.showSelectList]}>
        {selectData.map(item => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.5}
            onPress={() => onPressHandler(item)}
            style={styles.listItem}>
            <Text style={isDarkTheme && placeholders.WHITE_TEXT_COLOR}>
              {item.value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default Dropdown;
