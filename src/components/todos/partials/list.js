import _ from 'lodash';
import React, { PropTypes } from 'react';

import TodoListItem from './list-item';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {_.map(todos, (todo, i) => <TodoListItem key={i} todo={todo} />)}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
