import React from 'react';
import {View, Animated, PanResponder, StyleSheet, Text} from 'react-native';
import {colors, placeholders} from '../../../../assets/constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.BLUE,
    borderRadius: 10,
    padding: 10,
    height: 200,
    ...placeholders.FLEX_CENTER_CENTER,
    marginBottom: 10,
    overflow: 'hidden',
  },
  ball: {
    backgroundColor: colors.LIGHT_GREEN,
    height: 100,
    width: 100,
    borderRadius: 50,
    ...placeholders.FLEX_CENTER_CENTER,
  },
});

const AnimationBallWithVanillaJs = () => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {
      position.setOffset({
        x: position.x._value,
        y: position.y._value,
      });
      position.setValue({x: 0, y: 0});
    },
    onPanResponderMove: Animated.event(
      [null, {dx: position.x, dy: position.y}],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      position.flattenOffset();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.ball, position.getLayout()]}
        {...panResponder.panHandlers}>
        <Text>Move me</Text>
      </Animated.View>
    </View>
  );
};

export default AnimationBallWithVanillaJs;
