import * as types from './actionTypes';

export function addNewBet(bet) {
  return {
    type: types.ADD_NEW_BET,
    payload: {
      betValue: bet.value,
      betAutoCash: bet.autoCash
    }
  };
}
