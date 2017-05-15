import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Error error={{ title: 'test', message: 'test' }} />,
    );
    expect(component).toMatchSnapshot();
  });
});
