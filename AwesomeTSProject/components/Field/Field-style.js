import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  placeholders,
  indents,
} from '../../assets/constants/styles';

export default StyleSheet.create({
  input: {
    fontSize: fonts.MAIN_SIZE,
    ...placeholders.BORDER_DEFAULT_PARAMS,
    borderColor: colors.GREY,
    color: colors.GREY,
    padding: indents.MAIN_HORIZONTAL_PADING,
  },
  label: {
    fontSize: fonts.MAIN_SIZE,
    color: colors.BLACK,
    fontWeight: fonts.WEIGHT_SIZE,
    marginBottom: 4,
  },
});
