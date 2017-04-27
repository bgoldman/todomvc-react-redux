import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { TodoPropType } from '../../../lib/prop-types';

class TodoListToggle extends Component {
  allTodosCompleted() {
    const { todos } = this.props;
    const incompleteTodos = _.reject(todos, todo => todo.completed);

    return (incompleteTodos.length === 0);
  }

  handleChange() {
    const { completeAllTodos, uncompleteAllTodos } = this.props;
    const allTodosCompleted = this.allTodosCompleted();

    if (allTodosCompleted) {
      uncompleteAllTodos();
    } else {
      completeAllTodos();
    }
  }

  render() {
    const allTodosCompleted = this.allTodosCompleted();
    const handleChange = this.handleChange.bind(this);

    return (
      <div>
        <input
          className="toggle-all"
          type="checkbox"
          checked={allTodosCompleted}
          onChange={handleChange}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    );
  }
}

TodoListToggle.propTypes = {
  completeAllTodos:   PropTypes.func.isRequired,
  todos:              PropTypes.arrayOf(TodoPropType).isRequired,
  uncompleteAllTodos: PropTypes.func.isRequired,
};

export default TodoListToggle;
