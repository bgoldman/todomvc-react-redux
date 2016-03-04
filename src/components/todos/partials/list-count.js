import React, { Component } from 'react';

export default class TodoListCount extends Component {
  render() {
    const { todos } = this.props;

    return (
      <span className="todo-count">
        <strong>{todos.length}</strong>
        <span> </span>
        item{todos.length !== 1 && 's'} left
      </span>
    );
  }
}
