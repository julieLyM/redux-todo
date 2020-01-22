import { TOGGLE_TODO } from './actionsTypes';

export const checkToggle = () => {
  return {
    type: TOGGLE_TODO,
    payload: null,
  };
};
