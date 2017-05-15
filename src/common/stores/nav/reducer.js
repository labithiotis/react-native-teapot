import { HOME } from '../../routes';
import Navigator from '../../navigator';

const initialState = Navigator.router.getStateForAction(
  Navigator.router.getActionForPathAndParams(HOME),
);

export default function navReducer(state = initialState, action) {
  const nextState = Navigator.router.getStateForAction(action, state);
  return nextState || state;
}
