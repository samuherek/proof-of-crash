import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function uiReducer(state = initialState.ui, action) {
  switch (action.type) {
    case types.SET_ACTIVE_TOKEN: {
      return {
        ...state,
        activeToken: action.payload.token
      };
    }

    case types.DISABLE_PLAYER_ENTRY: {
      return {
        ...state,
        playerEntryActive: false
      };
    }

    case types.ENABLE_PLAYER_ENTRY: {
      return {
        ...state,
        playerEntryActive: true,
        crashActive: false
      };
    }

    case types.ACTIVATE_CRASH: {
      return {
        ...state,
        crashActive: true
      };
    }

    default:
      return state;
  }
}
