import { combineReducers } from 'redux';

import todoReducer from './todoReducer.js';
import filterReducer from './toggleReducer.js';

export default combineReducers({
  tasks: todoReducer,
  filter: filterReducer,
});
