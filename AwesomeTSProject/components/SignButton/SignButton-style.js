import { StyleSheet } from 'react-native';
import { colors, placeholders, sizes } from '../../assets/constants/styles';

export default StyleSheet.create({
  btn: {
    backgroundColor: colors.VIOLET,
    height: sizes.TOUCH_BTN_HEIGHT,
    borderRadius: 6,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  btnTitle: {
    color: colors.WHITE,
  },
});
