import {View, Text, Animated, Easing, useWindowDimensions} from 'react-native';
import React, {useRef} from 'react';
import styles from './AnimationScreen.style';
import AnimNavigateItem from './AnimNavigateItem';
import {IAnimateSettings} from './types';
import AppleIcon from '../../../../images/icons/apple-alt-solid.svg';
import {colors} from '../../../../assets/constants/styles';

const AnimationOne = () => {
  const DC = useWindowDimensions();
  const animation = useRef(new Animated.Value(0)).current;

  const animateTiming: (
    settings: IAnimateSettings,
  ) => Animated.CompositeAnimation = ({
    toValue = 100,
    duration = 2000,
    delay = 0,
    useNativeDriver = true,
    easing = Easing.bounce,
  }) => {
    return Animated.timing(animation, {
      toValue,
      delay,
      duration,
      useNativeDriver,
      easing,
    });
  };

  const onStartAnimation = () => {
    animateTiming({}).start();
  };

  const goBackAnimation = () => {
    animateTiming({
      toValue: 0,
      easing: Easing.cubic,
    }).start();
  };

  const onStartLoopAnimation = () => {
    Animated.loop(
      Animated.sequence([
        animateTiming({delay: 1000}),
        animateTiming({toValue: 0, easing: Easing.cubic}),
      ]),
    ).start();
  };

  const resetAnimation = () => {
    animateTiming({}).reset();
  };

  const stopedAnimation = () => {
    animateTiming({}).stop();
  };

  return (
    <View style={styles.innerContainer}>
      <View style={styles.navBar}>
        <AnimNavigateItem action={onStartAnimation} iconId={'right'} />
        <AnimNavigateItem action={goBackAnimation} iconId={'left'} />
        <AnimNavigateItem action={onStartLoopAnimation} iconId={'infinity'} />
        <AnimNavigateItem action={stopedAnimation} iconId={'stop'} />
        <AnimNavigateItem action={resetAnimation} iconId={'reset'} />
      </View>
      <Animated.View
        style={[
          styles.animatedBox,
          {
            opacity: animation.interpolate({
              inputRange: [0, 100],
              outputRange: [1, 0.2],
            }),
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, DC.width - 192],
                }),
              },
              {
                rotate: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}>
        <AppleIcon width={100} height={100} fill={colors.WHITE} />
      </Animated.View>
    </View>
  );
};

export default AnimationOne;
