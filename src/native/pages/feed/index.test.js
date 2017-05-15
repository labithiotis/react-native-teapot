import React from 'react';
import { shallow } from 'enzyme';
import { Feed } from './index';

describe('Feed', () => {
  it('should render correctly', () => {
    const props = global.defaultProps({
      navigation: {
        state: {
          routeName: 'feed',
        },
      },
      screenProps: {
        feed: {
          error: null,
          loading: false,
          data: [],
        },
        locale: {
          pages: {
            feed: {
              back: 'test',
            },
          },
        },
      },
    });
    const component = shallow(<Feed {...props} />);
    expect(component).toMatchSnapshot();
  });
});
