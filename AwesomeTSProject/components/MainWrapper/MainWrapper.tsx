import React, {ReactNode} from 'react';
import {
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import s from './MainWrapper-style';

interface IProps {
  children: ReactNode;
}

const MainWrapper = ({children}: IProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={s.backgroundStyle}>
        <ImageBackground
          source={require('../../images/background.jpg')}
          style={s.backgroundImage}>
          {children}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MainWrapper;
