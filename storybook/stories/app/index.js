import React from 'react';
import App from '../../../src/native/App';
import { Provider } from 'react-redux';
import { storiesOf } from '@kadira/react-native-storybook';
import configureStore from '../../../src/common/configureStore';
const store = configureStore({ initialState: {} });

storiesOf('App', module).add('normal', () => (
  <Provider store={store}>
    <App />
  </Provider>
));
