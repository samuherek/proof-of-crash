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

export function cashOut(nextAccountsBalance) {
  return {
    type: types.CASH_OUT,
    payload: {
      nextAccountsBalance
    }
  };
}

export function adjustCrashBalance(nextAccountsBalance) {
  return {
    type: types.ADJUST_CRASH_BALANCE,
    payload: {
      nextAccountsBalance
    }
  };
}

// MIDDLEWARE
export function crashedWithBet() {
  return function crashedWithBetThunk(dispatch, getState) {
    const { accounts, ui, bet } = getState();

    const nextAccounts = accounts.map(account => {
      if (account.token === ui.activeToken) {
        const number = Number(account.balance) - Number(bet.value);
        account.balance = String(number.toFixed(2));
      }
      return account;
    });
    dispatch(adjustCrashBalance(nextAccounts));
  };
}

export function cashOutAt(cashOutAt) {
  return function cashOutThunk(dispatch, getState) {
    const { accounts, ui, bet } = getState();

    const nextAccounts = accounts.map(account => {
      if (account.token === ui.activeToken) {
        const number = Number(bet.value) * Number(cashOutAt) + Number(account.balance);
        account.balance = String(number.toFixed(2));
      }
      return account;
    });
    dispatch(cashOut(nextAccounts));
  };
}
