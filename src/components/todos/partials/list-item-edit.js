import classNames from 'classnames';
import React, { Component } from 'react';

import actions from '../../../actions/todo';

const { deleteTodo, updateTodo } = actions;

const ENTER_KEY  = 13;
const ESCAPE_KEY = 27;

export default class TodoListItemEdit extends Component {
  handleSubmit(e) {
    const { stopEditing, todo } = this.props;

    if (e.which === ESCAPE_KEY) {
      stopEditing();
      return;
    }

    if (e.which !== ENTER_KEY) {
      return;
    }

    const { edit: { value: title } } = this.refs;

    stopEditing();

    if (title === '') {
      deleteTodo(todo);
      return;
    }

    updateTodo(todo, { title });
  }

  componentDidMount() {
    const { edit } = this.refs;

    edit.focus();
  }

  render() {
    const { stopEditing, todo } = this.props;

    return (
      <input
        ref="edit"
        className="edit"
        onKeyUp={this.handleSubmit.bind(this)}
        onBlur={stopEditing}
        defaultValue={todo.title}
      />
    );
  }
}
