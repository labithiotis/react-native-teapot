import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
import Error from '../../../src/native/components/Error';
import Image from '../../../src/native/components/Image';
import Loading from '../../../src/native/components/Loading';

storiesOf('Common', module)
  .add('error - defaults', () => <Error error={{}} />)
  .add('error - override', () => (
    <Error error={{ title: 'Welcome', message: 'Test', icon: 'globe' }} />
  ))
  .add('loading', () => <Loading />)
  .add('loading - no animation', () => <Loading animate={false} />)
  .add('loading - animate icon only', () => <Loading animateIconOnly={true} />)
  .add('image', () => (
    <Image
      source={require('../../../src/native/components/img/EmptyState@2x.png')}
    />
  ));
