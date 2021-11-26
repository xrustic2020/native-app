import { StyleSheet } from 'react-native';
import { placeholders } from '../../../../assets/constants/styles';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    ...placeholders.FLEX_CENTER_CENTER,
    backgroundColor: 'yellow',
  },
});
