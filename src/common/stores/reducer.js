import { combineReducers } from 'redux';

import locales from './locales/reducer';
import device from './device/reducer';
import feed from './feed/reducer';
import nav from './nav/reducer';
import ui from './ui/reducer';

export default combineReducers({
  locales,
  device,
  feed,
  nav,
  ui,
});
