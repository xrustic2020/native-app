import { StyleSheet } from 'react-native';
import {
  fonts,
  indents,
  placeholders,
  colors,
} from '../../assets/constants/styles';

export default StyleSheet.create({
  reminder: {
    backgroundColor: colors.NEUTRAL_VIOLET,
    paddingTop: indents.MAIN_BOTTOM,
    paddingHorizontal: indents.MAIN_BOTTOM,
  },
  reminderHeading: {
    fontSize: fonts.MAIN_SIZE,
    marginBottom: indents.MAIN_BOTTOM,
    fontWeight: '600',
    ...placeholders.TEXT_CENTER,
  },
});
