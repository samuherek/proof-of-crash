import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function accountsReducer(state = initialState.accounts, action) {
  switch (action.type) {
    case types.SIGN_OUT:
      return {
        ...initialState.auth
      };

    default:
      return state;
  }
}
