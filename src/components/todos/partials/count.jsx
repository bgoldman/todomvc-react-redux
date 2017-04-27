import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { TodoPropType } from '../../../lib/prop-types';

class TodoListCount extends Component {
  numActiveTodos() {
    const { todos } = this.props;

    return _.reject(todos, todo => todo.completed).length;
  }

  render() {
    const numActiveTodos = this.numActiveTodos();

    return (
      <span className="todo-count">
        <strong>{numActiveTodos}</strong>
        <span>&nbsp;</span>
        item{numActiveTodos !== 1 && 's'} left
      </span>
    );
  }
}

TodoListCount.propTypes = {
  todos: PropTypes.arrayOf(TodoPropType).isRequired,
};

export default TodoListCount;
