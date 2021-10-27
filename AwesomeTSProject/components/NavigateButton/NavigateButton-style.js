import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  placeholders,
  sizes,
  indents,
} from '../../assets/constants/styles';

export default StyleSheet.create({
  btn: {
    ...placeholders.BORDER_DEFAULT_PARAMS,
    borderColor: colors.VIOLET,
    height: sizes.TOUCH_BTN_HEIGHT,
    ...placeholders.FLEX_CENTER_CENTER,
    paddingHorizontal: indents.MAIN_HORIZONTAL_PADING * 2,
    marginBottom: 10,
  },
  btnTitle: {
    fontWeight: fonts.WEIGHT_SIZE,
    color: colors.VIOLET,
  },
});
