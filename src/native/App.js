import React, { Component, PropTypes } from 'react';
import fetch from 'fetch-everywhere';
import { routes } from '../common/routes';
import Navigator from '../common/navigator';
import { connect } from 'react-redux';
import { Answers } from 'react-native-fabric';
import capitalize from '../common/utils/capitalize';
import { addNavigationHelpers } from 'react-navigation';
import PushNotification from 'react-native-push-notification';
import mapStateToProps from '../common/stores/mapStateToProps';
import mapDispatchToProps from '../common/stores/mapDispatchToProps';
import { AppState, BackHandler } from 'react-native';

const getRouteName = nav => nav.routes[nav.index].routeName;

class App extends Component {
  static propTypes = {
    ui: PropTypes.object.isRequired,
    device: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    locales: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.configurePushNotifications(props.config.pushNotifications);
  }

  configurePushNotifications({ GCMSenderID, url, apiKey }) {
    PushNotification.configure({
      requestPermissions: false,
      popInitialNotification: true,
      senderID: GCMSenderID,
      permissions: { alert: true, badge: true, sound: false },
      onRegister: data => {
        if (data && data.token) {
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': apiKey,
            },
            body: JSON.stringify(data),
          });
        }
      },
      onNotification: ({ data }) => {
        if (data && data.route && routes[data.route]) {
          this.navigator.navigate(routes[data.route]);
        }
      },
    });
  }

  componentDidMount() {
    AppState.addEventListener('change', this.appStateChange);
    BackHandler.addEventListener('hardwareBackPress', this.hardwareBackPress);
    this.logContentView(getRouteName(this.props.nav));
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.appStateChange);
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.hardwareBackPress,
    );
  }

  appStateChange(currentAppState) {
    if (currentAppState === 'active') {
      PushNotification.setApplicationIconBadgeNumber(0);
    }
  }

  hardwareBackPress() {
    this.props.goBack();
  }

  componentWillReceiveProps({ nav }) {
    const nextRouteName = getRouteName(nav);
    if (nextRouteName !== getRouteName(this.props.nav)) {
      this.logContentView(nextRouteName);
    }
  }

  logContentView(name) {
    Answers.logContentView(capitalize(name) + ' screen', 'Screens', name, {});
  }

  render() {
    return (
      <Navigator
        screenProps={this.props}
        ref={nav => (this.navigator = nav)}
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
