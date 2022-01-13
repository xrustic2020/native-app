import React, {ReactNode} from 'react';
import {
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';

import styles from './MainWrapper.style';

interface IProps {
  children: ReactNode;
}

const MainWrapper = ({children}: IProps) => {
  return (
    <ImageBackground
      source={require('../../images/background.jpg')}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.saveContainer}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.backgroundStyle}>{children}</View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MainWrapper;
