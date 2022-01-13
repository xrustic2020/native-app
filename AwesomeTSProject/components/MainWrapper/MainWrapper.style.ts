import {StyleSheet} from 'react-native';
import {colors, indents} from '../../assets/constants/styles';

export default StyleSheet.create({
  saveContainer: {
    flex: 1,
  },
  backgroundStyle: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: indents.MAIN_HORIZONTAL_PADING * 2,
  },
});
