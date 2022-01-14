import {StyleSheet} from 'react-native';
import {colors, placeholders} from '../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    marginBottom: 0,
    paddingBottom: 0,
  },
  btn: {
    borderWidth: 2,
    borderRadius: 6,
    borderColor: colors.LIGHT_GREY,
    width: 45,
    height: 30,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  btnTitle: {
    fontWeight: 'bold',
    color: colors.LIGHT_GREY,
  },
  active: {
    borderColor: colors.LIGHT_VIOLET,
    backgroundColor: colors.LIGHT_VIOLET,
    color: colors.WHITE,
  },
});
