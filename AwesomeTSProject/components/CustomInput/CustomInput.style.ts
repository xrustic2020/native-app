import {StyleSheet} from 'react-native';
import {colors, fonts, placeholders} from '../../assets/constants/styles';

export default StyleSheet.create({
  inputContainer: {
    position: 'relative',
    paddingVertical: 10,
  },
  placeholder: {
    position: 'absolute',
    top: 22,
    left: 16,
    zIndex: 10,
    fontSize: fonts.MAIN_SIZE,
    color: colors.GREY,
  },
  focusedInput: {
    top: 0,
    fontSize: 14,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 10,
  },
  textInput: {
    ...placeholders.BORDER_DEFAULT_PARAMS,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: colors.GREY,
    color: colors.GREY,
    fontSize: fonts.MAIN_SIZE,
  },
  notValid: {
    color: 'red',
    borderColor: 'red',
  },
});
