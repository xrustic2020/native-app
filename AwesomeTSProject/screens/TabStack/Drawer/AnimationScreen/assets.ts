import {Animated} from 'react-native';
import {ISpringAnimateSettings} from './types';

export const springAnimate: (
  settings: ISpringAnimateSettings,
) => Animated.CompositeAnimation = ({
  animRef,
  toValue = 100,
  delay = 0,
  useNativeDriver = true,
}) => {
  return Animated.spring(animRef, {
    toValue,
    delay,
    useNativeDriver,
  });
};
