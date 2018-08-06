import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function playReducer(state = initialState.play, action) {
  switch (action.type) {
    case types.SIGN_OUT:
      return {
        ...initialState.auth
      };

    default:
      return state;
  }
}
