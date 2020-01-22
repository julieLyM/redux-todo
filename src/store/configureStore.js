import { createStore } from 'redux';
import appReducer from '../reducers';
import { addTodo } from '../actions';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addTodo({ title: 'Make a good appV1', done: true }));
store.dispatch(addTodo({ title: 'Make a good appV2', done: false }));

export default store;
