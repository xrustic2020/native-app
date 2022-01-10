import { StyleSheet } from 'react-native';
import { colors, fonts, placeholders } from '../../../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: colors.LIGHT_VIOLET,
    alignItems: 'center',
    marginBottom: 40,
  },
  headerWrapper: {
    width: '80%',
    position: 'relative',
  },
  input: {
    ...placeholders.BORDER_DEFAULT_PARAMS,
    borderColor: colors.WHITE,
    color: colors.WHITE,
    paddingLeft: 46,
    paddingVertical: 18,
  },
  icon: {
    position: 'absolute',
    top: 18,
    left: 14,
  },
  heading: {
    fontFamily: fonts.IRIS_GROVER,
    marginBottom: 50,
    fontSize: fonts.HEADING_SIZE,
    color: colors.BLACK,
  },
  span: {
    color: 'red',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#5040ff',
    elevation: 10,
    shadowColor: '#52006A',
  },
  phone: {
    marginBottom: 20,
  },
});
