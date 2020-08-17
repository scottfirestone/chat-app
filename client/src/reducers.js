import { combineReducers } from 'redux';
import authReducer from './auth/ducks';
import homeReducer from './views/Home/ducks';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

export default rootReducer;
