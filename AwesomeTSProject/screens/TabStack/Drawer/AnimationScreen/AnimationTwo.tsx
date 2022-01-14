import {View, Animated, Easing, useWindowDimensions} from 'react-native';
import React, {useRef, useContext} from 'react';
import styles from './AnimationScreen.style';
import {colors} from '../../../../assets/constants/styles';
import AnimNavigateItem from './AnimNavigateItem';
import BoneIcon from '../../../../images/icons/bone-solid.svg';
import {IAnimateSettings} from './types';
import {themeContext} from '../../../../context/ThemeProvider';

const AnimationTwo = () => {
  const {isDarkTheme} = useContext(themeContext);
  const DC = useWindowDimensions();
  const animation = useRef(new Animated.Value(0)).current;

  const animateTiming: (
    settings: IAnimateSettings,
  ) => Animated.CompositeAnimation = ({
    toValue = 100,
    duration = 3000,
    delay = 0,
    useNativeDriver = false,
    easing = Easing.cubic,
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
    }).start();
  };

  const onStartLoopAnimation = () => {
    Animated.loop(
      Animated.sequence([
        animateTiming({
          delay: 1000,
          easing: Easing.linear,
        }),
        animateTiming({
          toValue: 0,
          easing: Easing.bounce,
        }),
      ]),
    ).start();
  };

  const resetAnimation = () => {
    animateTiming({}).reset();
    goBackAnimation();
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
            transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: [1, 0.5],
                }),
              },
              {
                translateX: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, DC.width * 2 - 156 * 2],
                }),
              },
              {
                rotateX: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0deg', '360deg'],
                }),
              },
              {
                rotateY: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0deg', '180deg'],
                }),
              },
            ],
            backgroundColor: animation.interpolate({
              inputRange: [0, 50, 100],
              outputRange: [
                colors.LIGHT_BLUE,
                colors.ORANGE,
                colors.LIGHT_GREEN,
              ],
            }),
          },
        ]}>
        <BoneIcon
          width={100}
          height={100}
          fill={isDarkTheme ? colors.BLACK : colors.WHITE}
        />
      </Animated.View>
    </View>
  );
};

export default AnimationTwo;
