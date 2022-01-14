import {StyleSheet} from 'react-native';
import {indents} from '../../assets/constants/styles';

export default StyleSheet.create({
  radio: {
    paddingVertical: indents.MAIN_BOTTOM * 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
