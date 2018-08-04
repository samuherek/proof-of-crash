import { combineReducers } from 'redux';

// Reducers
import authReducer from './authReducer';

// Combine Reducers
const reducers = combineReducers({
  auth: authReducer
});

export default reducers;
