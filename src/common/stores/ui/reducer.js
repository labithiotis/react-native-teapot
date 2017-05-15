import * as actions from './actions';

const initialState = {};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_UI: {
      return { ...state, ...action.payload };
    }
  }
  return state;
}
