import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('Image', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Image source={require('./img/EmptyState.png')} />,
    );
    expect(component).toMatchSnapshot();
  });
});
