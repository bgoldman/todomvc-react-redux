import React, { Component } from 'react';

import actions from '../../../actions/todo';

const { clearCompletedTodos } = actions;

export default class TodoListClear extends Component {
  handleClick() {
    clearCompletedTodos();
  }

  render() {
    const handleClick = this.handleClick.bind(this);

    return (
      <button className="clear-completed" onClick={handleClick}>
        Clear completed
      </button>
    );
  }
}
