import { StyleSheet } from 'react-native';
import { fonts } from '../../../../assets/constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    position: 'relative',
  },
  modal: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 15,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: fonts.MAIN_SIZE,
  },
  webViewContainer: {
    marginTop: 20,
  },
});
