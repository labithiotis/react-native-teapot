import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import Page from './Page';

const Child = () => <View />;
const Parent = Page(Child);

describe('Page', () => {
  let component;

  beforeEach(() => {
    const props = global.defaultProps({ test: 'test' });
    component = shallow(<Parent {...props} />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should contain a passed in component with props', () => {
    const child = component.find(Child);
    expect(child).toBeTruthy();
    expect(child.prop('test')).toEqual('test');
  });
});
