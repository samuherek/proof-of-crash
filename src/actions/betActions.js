import * as types from './actionTypes';
import { auth, uidKey } from '../firebase';

export function addNewBet(bet) {
  return {
    type: types.ADD_NEW_BET,
    payload: {
      betValue: bet.value,
      betAutCash: bet.authCash
    }
  };
}
