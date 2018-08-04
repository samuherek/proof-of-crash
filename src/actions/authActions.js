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

export function authDone() {
  return {
    type: types.AUTH_DONE
  };
}

// MIDDLEWARE
const authUserSignOut = dispatch => {
  auth.signOut().then(() => {
    dispatch(signOut());
    localStorage.removeItem(uidKey);
  });
};

export function startListeningToAuthChanges() {
  return function startListeningToAuthChangesThunk(dispatch, getState) {
    const localUser = localStorage.getItem(uidKey);

    auth.onAuthStateChanged(user => {
      if (user) {
        if (!localUser || localUser !== user) {
          localStorage.setItem(uidKey, user.uid);
        }
        dispatch(signIn(user));
      } else {
        if (auth.currentUser) {
          authUserSignOut(dispatch);
        }
      }
      dispatch(authDone());
    });
  };
}

export function signOutUser() {
  return function signOutUserThunk(dispatch) {
    authUserSignOut(dispatch);
  };
}

export function createNewUser(email, password) {
  return function createNewUserThunk(dispatch) {
    return auth.createUserWithEmailAndPassword(email, password).then(() => {
      auth.currentUser.sendEmailVerification().catch(function(error) {
        console.log('error sending', error);
      });
    });
  };
}
