import * as types from './actionTypes';

export function setActiveToken(token) {
  return {
    type: types.SET_ACTIVE_TOKEN,
    payload: {
      token
    }
  };
}

export function enablePlayerEntry() {
  return {
    type: types.ENABLE_PLAYER_ENTRY
  };
}

export function disablePlayerEntry() {
  return {
    type: types.DISABLE_PLAYER_ENTRY
  };
}

export function activateCrash() {
  return {
    type: types.ACTIVATE_CRASH
  };
}
