import React, { Component, PropTypes } from 'react';
import ReactNative from 'react-native';
import { colours } from '../styles';
import color from 'color';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const { View, Text, StyleSheet } = ReactNative;

export default class Error extends Component {
  static propTypes = {
    error: PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      message: PropTypes.string,
    }).isRequired,
  };

  render() {
    const {
      styles = {},
      error: {
        icon = 'exclamation-triangle',
        title = 'Error!',
        message = 'Whoops, something funky happened...',
      },
    } = this.props;
    return (
      <View style={[defaultStyles.container, styles.icon]}>
        <FAIcon style={[defaultStyles.icon, styles.icon]} name={icon} />
        <Text style={[defaultStyles.title, styles.title]}>
          {title}
        </Text>
        <Text style={[defaultStyles.text, styles.text]}>
          {message}
        </Text>
      </View>
    );
  }
}

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 30,
  },
  icon: {
    color: colours.red,
    fontSize: 80,
    textAlign: 'center',
    marginBottom: 5,
    opacity: 0.4,
    backgroundColor: 'transparent',
  },
  title: {
    color: colours.red,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 5,
  },
  text: {
    color: color(colours.red).darken(0.3).string(),
    fontSize: 14,
    textAlign: 'center',
  },
});
