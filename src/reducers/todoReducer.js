import { ADD_TODO, CHECKED_TODO } from '../actions/actionsTypes';

const todoReducer = (state = [], { type, payload }) => {
  if (type === ADD_TODO) {
    return [...state, payload];
  } else if (type === CHECKED_TODO) {
    const index = payload;
    const task = state[index];
    return [
      ...state.slice(0, index),
      { ...task, done: !task.done },
      ...state.slice(index + 1),
    ];
  }
  return state;
};

export default todoReducer;
