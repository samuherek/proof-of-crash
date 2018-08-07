import * as types from './actionTypes';

export function setActiveToken(token) {
  return {
    type: types.SET_ACTIVE_TOKEN,
    payload: {
      token
    }
  };
}
