
import { combineReducers } from 'redux';
import home from './home';
import settings from './settings';

const rootReducer = combineReducers({
  home,
  settings
});

export default rootReducer;