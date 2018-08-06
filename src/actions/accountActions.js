import * as types from './actionTypes';
import { auth, uidKey } from '../firebase';

export function signIn(user) {
  return {
    type: types.SIGN_IN,
    payload: {
      user
    }
  };
}

export function signOut() {
  return {
    type: types.SIGN_OUT
  };
}
