import React, {useRef} from 'react';
import {Animated} from 'react-native';

import styles from './AnimationScreen.style';
import AnimationOne from './AnimationOne';
import AnimationTwo from './AnimationTwo';
import AnimationThree from './AnimationThree';
import FillingLayout from './FillingLayout';
import AnimationBallWithVanillaJs from './AnimationBallWithVanillaJs';
import AnimationBallWithReanimate from './AnimationBallWithReanimate';

const AnimationScreen = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  return (
    <Animated.ScrollView
      style={[
        styles.container,
        {
          backgroundColor: animatedValue.interpolate({
            inputRange: [1050, 1500],
            outputRange: ['white', 'red'],
            extrapolate: 'clamp',
          }),
        },
      ]}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: animatedValue,
              },
            },
          },
        ],
        {useNativeDriver: false},
      )}
      scrollEventThrottle={16}>
      <AnimationOne />
      <AnimationTwo />
      <AnimationThree />
      <AnimationBallWithVanillaJs />
      <AnimationBallWithReanimate />
      <FillingLayout />
    </Animated.ScrollView>
  );
};

export default AnimationScreen;
