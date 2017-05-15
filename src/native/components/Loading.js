import React, { Component, PropTypes } from 'react';
import ReactNative from 'react-native';
import { colours } from '../styles';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

const { View, Easing, Animated, StyleSheet } = ReactNative;

const randomFlicker = () => ({
  toValue: _.random(0.3, 1),
  duration: _.random(10, 150),
  delay: _.random(10, 200),
});

export default class Loading extends Component {
  static propTypes = {
    animate: PropTypes.bool,
    icon: PropTypes.string,
    text: PropTypes.string,
    styles: PropTypes.object,
    duration: PropTypes.number,
    animateIconOnly: PropTypes.bool,
  };

  static defaultProps = {
    animate: true,
    icon: 'refresh',
    text: 'Loading...',
    styles: {},
    duration: 2000,
    animateIconOnly: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      spinValue: new Animated.Value(0),
      flickerValue: new Animated.Value(1),
    };
    this.animations = {
      spin: Animated.timing(this.state.spinValue, {
        toValue: 1,
        duration: this.props.duration,
        easing: Easing.linear,
      }),
    };
  }

  componentDidMount() {
    if (this.props.animate) {
      this.spin();
      if (!this.props.animateIconOnly) {
        this.flicker();
      }
    }
  }

  componentWillUnmount() {
    if (this.props.animate) {
      _.invoke(this, 'animations.spin.stop');
      _.invoke(this, 'animations.flicker.stop');
    }
  }

  spin() {
    this.state.spinValue.setValue(0);
    this.animations.spin.start(() => this.spin());
  }

  flicker() {
    const { flickerValue } = this.state;
    flickerValue.setValue(1);
    const flicker = () => Animated.timing(flickerValue, randomFlicker());
    const sequence = new Array(6).fill(1).map(flicker);
    this.animations.flicker = Animated.sequence(sequence).start(
      this.flicker.bind(this),
    );
  }

  render() {
    const { icon, text, styles } = this.props;
    const rotate = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const opacity = this.state.flickerValue;
    return (
      <View style={[defaultStyles.container, styles.container]}>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <FAIcon style={[defaultStyles.icon, styles.icon]} name={icon} />
        </Animated.View>
        <Animated.Text style={[defaultStyles.text, styles.text, { opacity }]}>
          {text}
        </Animated.Text>
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
    color: colours.blue,
    opacity: 0.4,
    fontSize: 60,
    textAlign: 'center',
    padding: 20,
    backgroundColor: 'transparent',
  },
  text: {
    color: colours.blue,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});
