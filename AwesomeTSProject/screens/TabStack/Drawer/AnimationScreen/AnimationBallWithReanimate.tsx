import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import type {PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

import {colors, placeholders} from '../../../../assets/constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.BLUE,
    borderRadius: 10,
    padding: 10,
    height: 300,
    ...placeholders.FLEX_CENTER_CENTER,
    marginBottom: 10,
    overflow: 'hidden',
  },
  box: {
    backgroundColor: colors.LIGHT_GREEN,
    height: 150,
    width: 100,
    borderRadius: 10,
    ...placeholders.FLEX_CENTER_CENTER,
  },
  centeredText: {textAlign: 'center'},
});

const AnimationBallWithReanimate = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

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
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text style={styles.centeredText}>Move me (reanimated)</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default AnimationBallWithReanimate;
