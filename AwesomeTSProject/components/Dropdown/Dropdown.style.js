import { StyleSheet } from 'react-native';
import {
  fonts,
  indents,
  placeholders,
  colors,
} from '../../assets/constants/styles';

export default StyleSheet.create({
  select: {
    marginTop: indents.MAIN_BOTTOM,
    ...placeholders.BORDER_DEFAULT_PARAMS,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderColor: colors.GREY,
    position: 'relative',
  },
  selectIcon: {
    position: 'absolute',
    top: 10,
    right: 6,
  },
  selectList: {
    paddingBottom: indents.MAIN_BOTTOM / 2,
  },
  showSelectList: {
    display: 'none',
  },
  listItem: {
    paddingVertical: 4,
    borderTopWidth: 1,
    borderTopColor: colors.LIGHT_GREY,
  },
  selectText: {
    color: colors.GREY,
    fontSize: fonts.MAIN_SIZE,
    paddingVertical: indents.MAIN_BOTTOM,
  },
});
