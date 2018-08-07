import * as types from './actionTypes';

export function addNewBet(betValue, autoCashAt) {
  return {
    type: types.ADD_NEW_BET,
    payload: {
      betValue,
      autoCashAt
    }
  };
}
