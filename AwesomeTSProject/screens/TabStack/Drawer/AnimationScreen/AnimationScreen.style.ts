import {StyleSheet} from 'react-native';
import {placeholders, colors} from '../../../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.WHITE_MORE,
  },
  innerContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.BLUE,
    borderRadius: 10,
    marginBottom: 10,
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  animatedBox: {
    width: 150,
    height: 150,
    backgroundColor: colors.LIGHT_GREEN,
    borderRadius: 10,
    ...placeholders.FLEX_CENTER_CENTER,
  },
});
