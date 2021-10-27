import { StyleSheet } from 'react-native';
import {
  colors,
  placeholders,
  sizes,
  fonts,
} from '../../assets/constants/styles';

export default StyleSheet.create({
  notRegisterText: {
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 4,
  },
  signUpBtn: {
    ...placeholders.BORDER_DEFAULT_PARAMS,
    borderColor: colors.VIOLET,
    height: sizes.TOUCH_BTN_HEIGHT,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  signUpBtnTitle: {
    fontWeight: fonts.WEIGHT_SIZE,
    color: colors.VIOLET,
  },
});
