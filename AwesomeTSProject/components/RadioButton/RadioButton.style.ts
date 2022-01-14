import {StyleSheet} from 'react-native';
import {colors, placeholders} from '../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.GREY,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: colors.VIOLET,
  },
  selected: {
    borderColor: colors.VIOLET,
  },
  selected_dark: {
    borderColor: colors.LIGHT_VIOLET,
  },
  text: {
    marginLeft: 10,
  },
});
