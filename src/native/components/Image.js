import React, { Component, PropTypes } from 'react';
import ImageProgress from 'react-native-image-progress';
import CircleSnail from 'react-native-progress/CircleSnail';
import { colours } from '../styles';
import isAbsoluteUrl from 'is-absolute-url';

export default class Image extends Component {
  static propTypes = {
    indicator: PropTypes.element,
    indicatorProps: PropTypes.object,
    indicatorSize: PropTypes.number,
    threshold: PropTypes.number,
    onError: PropTypes.func,
    source: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
      .isRequired,
    sourceFallBack: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
  };

  static defaultProps = {
    onError: () => {},
    sourceFallBack: require('./img/EmptyState@2x.png'),
  };

  constructor(props) {
    super(props);
    this.onError = this.onError.bind(this);
    const { source, sourceFallBack } = props;
    this.state = {
      source: source && source.uri && !isAbsoluteUrl(source.uri)
        ? sourceFallBack
        : source,
    };
  }

  onError(e) {
    const { onError, sourceFallBack } = this.props;
    this.setState({ source: sourceFallBack });
    onError(e);
  }

  render() {
    return (
      <ImageProgress
        {...this.props}
        source={this.state.source}
        indicator={CircleSnail}
        indicatorProps={{
          size: this.props.indicatorSize || 60,
          color: colours.blue,
        }}
        threshold={300}
        onError={this.onError}
      />
    );
  }
}
