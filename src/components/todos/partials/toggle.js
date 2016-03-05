import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

import actions from '../../../actions/todo';

const { completeAllTodos, uncompleteAllTodos } = actions;

class TodoListToggle extends Component {
  allTodosCompleted() {
    const { todos } = this.props;

    const incompleteTodos = _.reject(todos, todo => todo.completed);

    return (incompleteTodos.length === 0);
  }

  handleChange() {
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
  todos: PropTypes.array.isRequired,
};

export default TodoListToggle;
