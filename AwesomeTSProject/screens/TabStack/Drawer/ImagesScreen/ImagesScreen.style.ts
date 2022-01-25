import {StyleSheet} from 'react-native';
import {colors, placeholders, fonts} from '../../../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...placeholders.FLEX_CENTER_CENTER,
    backgroundColor: colors.WHITE_MORE,
  },
  container_dark: {
    backgroundColor: colors.GREY_MORE,
  },
  heading: {
    paddingTop: 10,
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: fonts.HEADING_SIZE,
  },
  list: {
    width: '90%',
    backgroundColor: colors.LIGHT_GREY,
  },
  imga: {
    width: '100%',
    height: 400,
  },
  whiteTextColor: {
    color: colors.WHITE,
  },
});
