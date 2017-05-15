import * as actions from './actions';
import { REHYDRATE } from 'redux-persist/constants';
import reviveStore from '../../utils/reviveStore';

const initialState = {
  error: null,
  loading: false,
  hasData: false,
  data: [],
};

export default function feedReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE: {
      return reviveStore(action.payload.feed, initialState);
    }

    case actions.FETCH_FEED_START: {
      return {
        ...state,
        ...{
          error: false,
          loading: true,
        },
      };
    }

    case actions.FETCH_FEED_ERROR: {
      return {
        ...state,
        ...{
          error: !state.hasData,
          loading: false,
        },
      };
    }

    case actions.FETCH_FEED_SUCCESS: {
      return {
        ...state,
        ...{
          loading: false,
          hasData: true,
          data: action.payload.data.children,
        },
      };
    }
  }
  return state;
}
