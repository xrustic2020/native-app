import RN from 'react-native';

export default RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#ee82ee',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerWrapper: {
    width: '80%',
    position: 'relative',
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#ffffff',
    color: '#ffffff',
    paddingLeft: 46,
  },
  icon: {
    position: 'absolute',
    top: 18,
    left: 14,
  },
  heading: {
    fontFamily: 'irishgrover',
    marginBottom: 50,
    fontSize: 24,
    color: '#000',
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
