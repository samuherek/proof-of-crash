import { combineReducers } from 'redux';

// Reducers
// import authReducer from './authReducer';
import accountsReducer from './accountsReducer';
import playReducer from './playReducer';

// Combine Reducers
const reducers = combineReducers({
  accounts: accountsReducer,
  play: playReducer
});

export default reducers;
