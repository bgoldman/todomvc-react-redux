import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import { TodoPropType } from '../../../lib/prop-types';

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
  todos:      PropTypes.arrayOf(TodoPropType).isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoList;
