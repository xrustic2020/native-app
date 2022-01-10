import {StyleSheet} from 'react-native';
import {
  colors,
  fonts,
  indents,
  placeholders,
} from '../../../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: indents.MAIN_HORIZONTAL_PADING,
  },
  heading: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: fonts.HEADING_SIZE,
    fontWeight: fonts.WEIGHT_SIZE.toString(),
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  message: {
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    ...placeholders.BORDER_DEFAULT_PARAMS,
    borderColor: colors.GREY,
  },
  contentContainer: {
    justifyContent: 'space-between',
  },
  item: {
    height: 110,
    marginBottom: 8,
    elevation: 10,
    shadowColor: colors.GREY,
    backgroundColor: colors.WHITE,
    borderRadius: 6,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  textWrapper: {
    width: '80%',
    ...placeholders.FLEX_CENTER_CENTER,
  },
  name: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  email: {
    fontSize: 8,
    textAlign: 'center',
  },
});
