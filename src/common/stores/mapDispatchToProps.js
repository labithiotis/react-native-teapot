import _ from 'lodash';
import { bindActionCreators } from 'redux';

import * as ui from './ui/actions';
import * as device from './device/actions';

const actions = [ui, device];

export default function mapDispatchToProps(dispatch) {
  const creators = actions.reduce(
    (c, v) => _.merge(c, _.pickBy(v, _.isFunction)),
    {},
  );
  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  };
}
