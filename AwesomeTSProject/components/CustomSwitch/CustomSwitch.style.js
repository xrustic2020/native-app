import { StyleSheet } from 'react-native';
import { indents, colors, sizes, fonts } from '../../assets/constants/styles';

export default StyleSheet.create({
  agreed: {
    height: sizes.TOUCH_BTN_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: indents.MAIN_BOTTOM * 4,
  },
  agreedText: {
    marginLeft: indents.MAIN_HORIZONTAL_PADING,
    fontSize: fonts.MAIN_SIZE,
    color: colors.GREY,
  },
});
