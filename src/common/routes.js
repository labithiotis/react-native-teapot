import Home from '../native/pages/home/index';
import Feed from '../native/pages/feed/index';

export const routes = {
  home: {
    screen: Home,
    path: 'home',
    screenOptions: {
      adBanner: 'top',
      statusBar: {
        hidden: true,
        animated: false,
      },
    },
    navigationOptions: {
      header: null,
    },
  },
  feed: {
    screen: Feed,
    path: 'feed',
    screenOptions: {
      adBanner: 'bottom',
      statusBar: {
        barStyle: 'dark-content',
      },
    },
  },
};

// Expose each route as an export so you can pass into navigate(ROUTE)
Object.keys(routes).forEach(route => (exports[route.toUpperCase()] = route));
