import { combineReducers } from 'redux';

// Reducers
// import authReducer from './authReducer';
import accountsReducer from './accountsReducer';
import betReducer from './betReducer';
import uiReducer from './uiReducer';

// Combine Reducers
const reducers = combineReducers({
  accounts: accountsReducer,
  bet: betReducer,
  ui: uiReducer
});

export default reducers;
