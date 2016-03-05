import React, { Component } from 'react';

import actions from '../../../actions/todo';

const { createTodo } = actions;

const ENTER_KEY = 13;

export default class TodoListCreate extends Component {
  handleSubmit(e) {
    if (e.which !== ENTER_KEY) {
      return;
    }

    const { 'new-todo': { value: title } } = this.refs;

    const completed = false;

    createTodo({ title, completed });

    this.refs['new-todo'].value = '';
  }

  render() {
    const handleSubmit = this.handleSubmit.bind(this);

    return (
      <input
        ref="new-todo"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyUp={handleSubmit}
      />
    );
  }
}
