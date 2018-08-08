import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function betReducer(state = initialState.bet, action) {
  switch (action.type) {
    case types.ADD_NEW_BET: {
      const { betValue, autoCashAt } = action.payload;
      return {
        ...state,
        value: betValue,
        autoCashAt
      };
    }

    case types.CASH_OUT:
    case types.ENABLE_PLAYER_ENTRY: {
      return {
        ...state,
        value: '',
        autoCashAt: ''
      };
    }

    default:
      return state;
  }
}
