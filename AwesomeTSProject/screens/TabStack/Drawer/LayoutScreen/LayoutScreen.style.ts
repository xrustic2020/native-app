import {StyleSheet, Platform} from 'react-native';
import {
  colors,
  fonts,
  indents,
  placeholders,
} from '../../../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE_MORE,
  },
  header: {
    width: '100%',
    height: 75,
    backgroundColor: colors.LIGHT_VIOLET,
    alignItems: 'center',
    marginBottom: 40,
    paddingBottom: 20,
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
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: indents.MAIN_HORIZONTAL_PADING,
  },
  heading: {
    fontFamily: fonts.IRIS_GROVER,
    marginBottom: 50,
    fontSize: fonts.HEADING_SIZE,
    color: colors.BLACK,
  },
  span: {
    color: colors.RED,
  },
  box: {
    width: 100,
    height: 100,
    marginBottom: 40,
    backgroundColor: colors.BLUE,
    elevation: 10,
    shadowColor: colors.VIOLET,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: -6,
          height: 6,
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
      },
    }),
  },
  box_dark: {
    shadowColor: colors.WHITE,
  },
  phone: {
    marginBottom: 20,
  },
  whiteTextColor: {
    color: colors.WHITE,
  },
});
