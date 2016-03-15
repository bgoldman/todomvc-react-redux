import React from 'react';

import actions from '../../../actions/todo';

const { clearCompletedTodos } = actions;

export default () => (
  <button className="clear-completed" onClick={clearCompletedTodos}>
    Clear completed
  </button>
);
