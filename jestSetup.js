import { defaultsDeep } from 'lodash'
import { routes } from './src/common/routes';
import config from './src/common/config';

const locale = {
  pages: {},
  errors: {}
};

/**
 *  HELPERS
 */

// Helper method to define default props for component.
global.defaultProps = (props) => defaultsDeep(props, {
  navigation: {
    navigate: jest.fn(),
    state: {
      routeName: 'home'
    }
  },
  screenProps: {
    config,
    locale,
    locales: {
      locales: {
        en: locale
      },
      selectedLanguage: 'en',
      availableLanguages: ['en'],
    },
    ui: {

    },
    device: {
      platform: 'ios'
    },
  }
});

/**
 *  MOCKERS
 */

jest.mock('react-native-fabric', () => ({
  Crashlytics: {
    crash: () => {},
  },
  Answers: {
    logCustom: () => {},
    logContentView: () => {},
  },
}));


// Mocking the route.screen used by react-navigation
// in routes as jest tries to render component and fail.
jest.mock('./src/common/routes');
Object.keys(routes).forEach((key) => routes[key].screen = false);
