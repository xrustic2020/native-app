import { StyleSheet } from 'react-native';
import { indents } from '../../assets/constants/styles';

export default StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingHorizontal: indents.MAIN_HORIZONTAL_PADING * 2,
  },
});
