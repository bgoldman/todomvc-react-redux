import PropTypes from 'prop-types';
import React from 'react';

const TodoListClear = ({ clearCompletedTodos }) => (
  <button className="clear-completed" onClick={clearCompletedTodos}>
    Clear completed
  </button>
);

TodoListClear.propTypes = {
  clearCompletedTodos: PropTypes.func.isRequired,
};

export default TodoListClear;
