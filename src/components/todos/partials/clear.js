import React, { Component } from 'react';

import actions from '../../../actions/todo';

const { clearCompletedTodos } = actions;

export default class TodoListClear extends Component {
  handleClick() {
    clearCompletedTodos();
  }

  render() {
    return (
      <button className="clear-completed" onClick={this.handleClick.bind(this)}>
        Clear completed
      </button>
    );
  }
}
