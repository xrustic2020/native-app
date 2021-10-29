import { StyleSheet } from 'react-native';
import { colors, fonts, placeholders } from '../../../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  heading: {
    marginBottom: 20,
    fontSize: fonts.HEADING_SIZE,
    fontWeight: fonts.WEIGHT_SIZE,
  },
  message: {
    marginBottom: 10,
  },
  mapContainer: {
    marginTop: 10,
    width: '90%',
    height: '80%',
  },
  map: {
    flex: 1,
  },
  text: {
    fontSize: fonts.MAIN_SIZE,
  },
});
