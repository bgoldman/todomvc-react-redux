import classNames from 'classnames';
import React, { Component } from 'react';

import actions from '../../../actions/todo';

const { updateTodo } = actions;

export default class TodoListItemComplete extends Component {
  handleCheck() {
    const { todo } = this.props;

    const { checkbox: { checked: completed } } = this.refs;

    updateTodo(todo, { completed });
  }

  render() {
    const { todo } = this.props;

    return (
      <input
        ref="checkbox"
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={this.handleCheck.bind(this)}
      />
    );
  }
}
