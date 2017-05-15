import * as actions from './actions';

const initialState = {
  isMobile: false,
  platform: '',
};

export default function deviceReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_PLATFORM: {
      const { platform } = action.payload;
      return { ...state, ...{ platform } };
    }
  }

  return state;
}
