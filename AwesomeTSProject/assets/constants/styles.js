import { StyleSheet } from 'react-native';

export const colors = {
  VIOLET: '#841584',
  LIGHT_VIOLET: '#ee82ee',
  NEUTRAL_VIOLET: '#c6cbef',
  GREY: '#808080',
  LIGHT_GREY: '#d3d3d3',
  BLUE: '#1e90ff',
  LIGHT_BLUE: '#87ceeb',
  BLACK: '#000000',
  WHITE: '#ffffff',
  RED: '#ff0000',
  GREEN: 'limegreen',
  LIGHT_GREEN: '#90ee90',
};

export const fonts = {
  MAIN_SIZE: 18,
  HEADING_SIZE: 24,
  WEIGHT_SIZE: '600',
  IRIS_GROVER: 'irishgrover',
};

export const indents = {
  MAIN_HORIZONTAL_PADING: 12,
  MAIN_BOTTOM: 12,
};

export const sizes = {
  TOUCH_BTN_HEIGHT: 40,
};

export const placeholders = StyleSheet.create({
  FLEX_CENTER_CENTER: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TEXT_CENTER: {
    textAlign: 'center',
  },
  BORDER_DEFAULT_PARAMS: {
    borderWidth: 2,
    borderRadius: 6,
  },
});
