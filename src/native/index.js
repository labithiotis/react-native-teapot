import App from './App';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, Platform } from 'react-native';
import configureStore from '../common/configureStore';
import { setPlatform } from '../common/stores/device/actions';

export default function index() {
  process.env.IS_REACT_NATIVE = true;
  const store = configureStore({
    initialState: { device: { isMobile: true } },
  });
  store.dispatch(setPlatform(Platform.OS));

  class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }

  AppRegistry.registerComponent('app', () => Root);
}
