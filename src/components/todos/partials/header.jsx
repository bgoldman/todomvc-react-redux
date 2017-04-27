import PropTypes from 'prop-types';
import React from 'react';

import TodoListCreate from '../partials/create';

const TodoListHeader = ({ createTodo }) => (
  <header className="header">
    <h1>todos</h1>
    <TodoListCreate createTodo={createTodo} />
  </header>
);

TodoListHeader.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default TodoListHeader;
