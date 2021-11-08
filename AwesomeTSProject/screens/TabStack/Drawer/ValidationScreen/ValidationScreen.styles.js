import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  indents,
  sizes,
} from '../../../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    backgroundColor: colors.WHITE,
    padding: 20,
  },
  button: {
    padding: 20,
    backgroundColor: colors.VIOLET,
  },
  btnTitle: {
    color: colors.WHITE,
    fontSize: fonts.MAIN_SIZE,
    fontWeight: '500',
    textAlign: 'center',
  },
  radio: {
    paddingVertical: indents.MAIN_BOTTOM,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreed: {
    height: sizes.TOUCH_BTN_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreedText: {
    marginLeft: indents.MAIN_HORIZONTAL_PADING,
    fontSize: fonts.MAIN_SIZE,
  },
});
