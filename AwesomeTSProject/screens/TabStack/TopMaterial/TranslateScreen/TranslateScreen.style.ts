import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../assets/constants/styles';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.WHITE_MORE,
  },
  title: {
    fontSize: fonts.HEADING_SIZE,
    color: colors.BLUE,
  },
});
