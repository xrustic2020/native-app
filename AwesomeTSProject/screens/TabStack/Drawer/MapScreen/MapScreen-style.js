import { StyleSheet } from 'react-native';
import { fonts, placeholders } from '../../../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  heading: {
    marginBottom: 50,
    fontSize: fonts.HEADING_SIZE,
    fontWeight: fonts.WEIGHT_SIZE,
  },
  message: {
    marginBottom: 10,
  },
  mapContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
  },
  map: {
    flex: 1,
  },
});
