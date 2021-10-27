import { StyleSheet } from 'react-native';
import {
  colors,
  placeholders,
  sizes,
  indents,
  fonts,
} from '../../assets/constants/styles';

export default StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderRadius: 6,
    borderColor: colors.LIGHT_GREY,

    height: sizes.TOUCH_BTN_HEIGHT,
    ...placeholders.FLEX_CENTER_CENTER,
    paddingHorizontal: indents.MAIN_HORIZONTAL_PADING,
    marginBottom: indents.MAIN_BOTTOM,
  },
  btnTitle: {
    fontWeight: fonts.WEIGHT_SIZE,
    color: colors.LIGHT_GREY,
  },
  active: {
    borderColor: colors.LIGHT_VIOLET,
    color: colors.BLACK,
  },
});
