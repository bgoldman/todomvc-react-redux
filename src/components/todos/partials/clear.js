import React from 'react';

import { clearCompletedTodos } from '../../../actions/todo';

export default () => (
  <button className="clear-completed" onClick={clearCompletedTodos}>
    Clear completed
  </button>
);
