import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function betReducer(state = initialState.bet, action) {
  switch (action.type) {
    case types.ADD_NEW_BET:
      return {
        ...initialState.bet
      };

    default:
      return state;
  }
}
