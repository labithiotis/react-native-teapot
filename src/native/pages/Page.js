import React, { Component, PropTypes, cloneElement } from 'react';
import { defaultsDeep } from 'lodash';
import { appStyles } from '../styles';
import { routes } from '../../common/routes';
import { Answers } from 'react-native-fabric';
import { AdMobBanner } from 'react-native-admob';
import { View, StatusBar } from 'react-native';

export default Contents =>
  class Page extends Component {
    static propTypes = {
      navigation: PropTypes.object.isRequired,
      screenProps: PropTypes.object.isRequired,
    };

    static navigationOptions = Contents.navigationOptions;

    constructor(props) {
      super(props);
      this.state = {
        showBanner: true,
      };
    }

    bannerReceiveAd() {
      Answers.logCustom('AdMob Shown');
    }

    bannerPressed() {
      Answers.logCustom('AdMob Pressed');
    }

    bannerError() {
      this.setState({ showBanner: false });
    }

    getRouteOptions() {
      return defaultsDeep(routes[this.props.navigation.state.routeName], {
        screenOptions: {},
        navigationOptions: {},
      });
    }

    render() {
      const { screenProps: { device, config } } = this.props;
      const {
        screenOptions: { adBanner, statusBar },
        navigationOptions: { header },
      } = this.getRouteOptions();
      const styling = { paddingTop: 20 };
      const views = [<Contents {...this.props} />];

      if (this.state.showBanner && adBanner) {
        let addMethod = adBanner === 'top' ? views.unshift : views.push;
        addMethod.call(
          views,
          <AdMobBanner
            style={{ height: 50 }}
            bannerSize={'smartBannerPortrait'}
            adUnitID={
              device.platform === 'ios'
                ? config.adBannerAPI.ios
                : config.adBannerAPI.android
            }
            didFailToReceiveAdWithError={this.bannerError.bind(this)}
            adViewDidReceiveAd={this.bannerReceiveAd.bind(this)}
            adViewWillLeaveApplication={this.bannerPressed.bind(this)}
          />,
        );
      }

      if ((statusBar && statusBar.hidden) || header !== null) {
        styling.paddingTop = 0;
      }

      views.push(
        <StatusBar
          hidden={false}
          animated={true}
          barStyle="light-content"
          showHideTransition="fade"
          {...statusBar}
        />,
      );

      return (
        <View style={[appStyles.container, styling]}>
          {views.map((view, index) => cloneElement(view, { key: index }))}
        </View>
      );
    }
  };
