import { StyleSheet } from 'react-native';

const textGlow = {
  textShadowOffset: { width: 0.1, height: 0.1 },
  textShadowRadius: 4,
};

export const colours = {
  black: '#000000',
  grey: '#4c4c4c',
  greyLight: '#e9e9e9',
  white: '#ffffff',
  orange: '#FFAE00',
  orangeDark: '#FF7808',
  green: '#2CCF05',
  greenDark: '#239a05',
  red: '#F41C04',
  redDark: '#ac1504',
  yellow: '#E3F629',
  yellowDark: '#d4d617',
  purple: '#551A8B',
  purpleLight: '#B140C2',
  purpleDark: '#411646',
  blue: '#3262a6',
  blueLight: '#6FD8FF',
  blueDark: '#132d42',
};

export const colourStyles = StyleSheet.create(
  Object.keys(colours).reduce((styles, colour) => {
    styles[colour] = {
      color: colours[colour],
    };
    styles[`${colour}Glow`] = Object.assign({}, textGlow, {
      textShadowColor: colours[colour],
    });
    return styles;
  }, {}),
);
