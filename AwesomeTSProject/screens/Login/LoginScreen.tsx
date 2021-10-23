/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  TextInput,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Platform,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const LoginScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{...backgroundStyle, ...styles.backgroundStyle}}>
        <ImageBackground
          source={require('../../images/background.jpg')}
          style={styles.backgroundImage}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.form}>
              <Text style={styles.heading}>Login</Text>
              <View style={styles.filed}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'please, enter here your Email'}
                />
              </View>

              <View style={styles.filed}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'please, enter here your Password'}
                  secureTextEntry={true}
                />
              </View>

              <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                <Text style={styles.btnTitle}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 40,
  },
  form: {
    paddingHorizontal: 24,
  },
  filed: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    color: 'grey',
    paddingHorizontal: 12,
    fontSize: 18,
  },
  label: {
    color: 'black',
    marginBottom: 4,
    fontSize: 24,
    fontWeight: '600',
  },
  btn: {
    backgroundColor: '#841584',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    color: 'white',
  },
});

export default LoginScreen;
