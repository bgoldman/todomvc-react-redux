import PropTypes from 'prop-types';
import React from 'react';

import { TodoPropType } from '../../../lib/prop-types';

import TodoListClear from '../partials/clear';
import TodoListCount from '../partials/count';
import TodoListFilters from '../partials/filters';

const TodoListFooter = ({ clearCompletedTodos, filter, todos }) => (
  <footer className="footer">
    <TodoListCount todos={todos} />
    <TodoListFilters filter={filter} />
    <TodoListClear clearCompletedTodos={clearCompletedTodos} />
  </footer>
);

TodoListFooter.propTypes = {
  clearCompletedTodos: PropTypes.func.isRequired,
  filter:              PropTypes.string,
  todos:               PropTypes.arrayOf(TodoPropType).isRequired,
};

export default TodoListFooter;
