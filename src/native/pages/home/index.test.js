import React from 'react';
import { shallow } from 'enzyme';

import { Home } from './index';

describe('Home', () => {
  let component;

  beforeEach(() => {
    const props = global.defaultProps({
      screenProps: {
        locale: {
          pages: {
            home: {
              title: 'Title',
              intro: 'The Intro',
              button: 'Click Me',
            },
          },
        },
      },
    });
    component = shallow(<Home {...props} />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
