import React from 'react';

export const TodoList = ({ tasks, checkTodo, filtered, checkToggle }) => {
  return (
    <div>
      {tasks.map((element, i) => (
        <div key={i}>
          <input
            type="checkbox"
            checked={element.done}
            onChange={checkTodo.bind(null, i)}
          />
          {element.title}
        </div>
      ))}
      <input type="checkbox" checked={filtered} onChange={checkToggle} />
    </div>
  );
};
