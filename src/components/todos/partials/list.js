import _ from 'lodash';
import React, { PropTypes } from 'react';

import TodoListItem from './list-item';

const TodoList = ({ deleteTodo, todos, updateTodo }) => (
  <ul className="todo-list">
    {_.map(todos, (todo, i) => (
      <TodoListItem
        key={i}
        todo={todo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todos:      PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoList;
