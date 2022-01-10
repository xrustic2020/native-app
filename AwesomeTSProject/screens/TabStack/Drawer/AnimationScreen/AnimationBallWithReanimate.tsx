import React, {useEffect} from 'react';
import {StyleSheet, View, PanResponder, Text, Dimensions} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import type {PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

import {placeholders} from '../../../../assets/constants/styles';

const {width, height} = Dimensions.get('window');
const SNAP_POINTS = [-width, 0, width];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 10,
    height: 400,
    ...placeholders.FLEX_CENTER_CENTER,
    marginBottom: 10,
    overflow: 'hidden',
  },
  ball: {
    backgroundColor: 'lime',
    height: 200,
    width: 100,
    borderRadius: 10,
    ...placeholders.FLEX_CENTER_CENTER,
  },
});

const AnimationBallWithReanimate = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    // new Array(5000).fill(0).map(() => console.log('JS поток занят!'));
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number; y: number}
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
    },
    onActive: ({translationX, translationY}, ctx) => {
      translateX.value = ctx.x + translationX;
      translateY.value = ctx.y + translationY;
    },
    onEnd: ({velocityX, velocityY}) => {
      translateX.value = withSpring(0, {velocity: velocityX});
      translateY.value = withSpring(0, {velocity: velocityY});
    },
  });
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.ball, animatedStyles]}>
          <Text style={{textAlign: 'center'}}>Move me (reanimated)</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default AnimationBallWithReanimate;
