import { ADD_TODO } from './actionsTypes';
import { CHECKED_TODO } from './actionsTypes';

export const addTodo = task => {
  return {
    type: ADD_TODO,
    payload: task,
  };
};

export const checkTodo = index => {
  return { type: CHECKED_TODO, payload: index };
};

