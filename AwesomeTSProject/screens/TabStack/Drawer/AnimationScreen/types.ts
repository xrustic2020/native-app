import {Animated} from 'react-native';

export interface IAnimateSettings {
  toValue?: number;
  duration?: number;
  delay?: number;
  useNativeDriver?: boolean;
  easing?: ((value: number) => number) | undefined;
}

export interface ISpringAnimateSettings {
  toValue?: number;
  delay?: number;
  useNativeDriver?: boolean;
}
