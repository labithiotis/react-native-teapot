import React from 'react';
import { View, AppRegistry } from 'react-native';
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@kadira/react-native-storybook';

configure(() => require('./stories'), module);

addDecorator(story => (
  <View style={{ flex: 1 }}>
    {story()}
  </View>
));

AppRegistry.registerComponent('app', () =>
  getStorybookUI({ port: 9001, host: 'localhost' }),
);
