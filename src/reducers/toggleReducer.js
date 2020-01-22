import { TOGGLE_TODO } from '../actions/actionsTypes';

const toggleReducer = (state = true, { type }) => {
  if (type === TOGGLE_TODO) {
    return !state;
  }
  return state;
};

export default toggleReducer;
