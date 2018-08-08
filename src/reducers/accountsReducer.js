import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function accountsReducer(state = initialState.accounts, action) {
  switch (action.type) {
    case types.ADJUST_CRASH_BALANCE:
    case types.CASH_OUT: {
      const { nextAccountsBalance } = action.payload;
      return [...nextAccountsBalance];
    }

    default:
      return state;
  }
}
