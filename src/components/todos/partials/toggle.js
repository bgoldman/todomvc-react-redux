import _ from 'lodash';
import React, { Component } from 'react';

import actions from '../../../actions/todo';

const { completeAllTodos, uncompleteAllTodos } = actions;

export default class TodoListToggle extends Component {
  allTodosCompleted() {
    const { todos } = this.props;

    const incompleteTodos = _.reject(todos, todo => todo.completed);

    return (incompleteTodos.length === 0);
  }

  handleChange() {
    const allTodosCompleted = this.allTodosCompleted();

    allTodosCompleted ? uncompleteAllTodos() : completeAllTodos();
  }

  render() {
    const allTodosCompleted = this.allTodosCompleted();

    return (
      <div>
        <input
          className="toggle-all"
          type="checkbox"
          checked={allTodosCompleted}
          onChange={this.handleChange.bind(this)}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    );
  }
}


