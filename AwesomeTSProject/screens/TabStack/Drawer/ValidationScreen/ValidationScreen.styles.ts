import {StyleSheet} from 'react-native';
import {
  colors,
  fonts,
  placeholders,
  sizes,
} from '../../../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    ...placeholders.FLEX_CENTER_CENTER,
  },
  modalContentBox: {
    width: '80%',
    height: '50%',
    backgroundColor: colors.WHITE,
    padding: 20,
    justifyContent: 'center',
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
  closeBtn: {
    marginTop: 40,
    height: sizes.TOUCH_BTN_HEIGHT,
    backgroundColor: colors.LIGHT_VIOLET,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  modalBtnText: {
    color: colors.WHITE,
    fontWeight: '600',
  },
});
