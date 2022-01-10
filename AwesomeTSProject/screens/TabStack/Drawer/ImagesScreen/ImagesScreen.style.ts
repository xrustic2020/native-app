import {StyleSheet} from 'react-native';
import {colors, placeholders, fonts} from '../../../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  heading: {
    paddingTop: 10,
    marginBottom: 50,
    fontWeight: fonts.WEIGHT_SIZE.toString(),
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
});
