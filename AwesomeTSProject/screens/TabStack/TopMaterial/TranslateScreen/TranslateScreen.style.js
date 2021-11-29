import { StyleSheet } from 'react-native';
import { colors, fonts, placeholders } from '../../../../assets/constants/styles';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: fonts.HEADING_SIZE,
    color: colors.BLUE,
  },
});
