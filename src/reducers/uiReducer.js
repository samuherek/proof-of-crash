import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function uiReducer(state = initialState.ui, action) {
  switch (action.type) {
    case types.SET_ACTIVE_TOKEN: {
      console.log(action.payload.toekn);
      return {
        ...state,
        activeToken: action.payload.token
      };
    }

    default:
      return state;
  }
}
