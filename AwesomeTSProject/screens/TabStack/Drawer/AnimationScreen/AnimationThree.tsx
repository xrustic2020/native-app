import {View, Animated, useWindowDimensions} from 'react-native';
import React, {useRef, useContext} from 'react';
import styles from './AnimationScreen.style';
import {colors} from '../../../../assets/constants/styles';
import AnimNavigateItem from './AnimNavigateItem';
import BombIcon from '../../../../images/icons/bomb-solid.svg';
import {ISpringAnimateSettings} from './types';
import {themeContext} from '../../../../context/ThemeProvider';

const AnimationThree = () => {
  const {isDarkTheme} = useContext(themeContext);
  const DC = useWindowDimensions();
  const animation = useRef(new Animated.Value(0)).current;

  const springAnimate: (
    settings: ISpringAnimateSettings,
  ) => Animated.CompositeAnimation = ({
    toValue = 100,
    delay = 0,
    useNativeDriver = false,
  }) => {
    return Animated.spring(animation, {
      toValue,
      delay,
      useNativeDriver,
    });
  };

  const onStartAnimation = () => {
    springAnimate({}).start();
  };

  const goBackAnimation = () => {
    springAnimate({
      toValue: 0,
    }).start();
  };

  const onStartLoopAnimation = () => {
    Animated.loop(
      Animated.sequence([
        springAnimate({
          delay: 1000,
        }),
        springAnimate({
          toValue: 0,
          delay: 1000,
        }),
      ]),
    ).start();
  };

  const resetAnimation = () => {
    springAnimate({}).reset();
    goBackAnimation();
  };

  const stopedAnimation = () => {
    springAnimate({}).stop();
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
                  inputRange: [0, 50, 100],
                  outputRange: [1, 0.5, 1],
                }),
              },
              {
                translateX: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, DC.width - 192],
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
              outputRange: [colors.LIGHT_VIOLET, colors.LIGHT_GREY, colors.RED],
            }),
          },
        ]}>
        <BombIcon
          width={100}
          height={100}
          fill={isDarkTheme ? colors.BLACK : colors.WHITE}
        />
      </Animated.View>
    </View>
  );
};

export default AnimationThree;
