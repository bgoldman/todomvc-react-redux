import PropTypes from 'prop-types';
import React, { Component } from 'react';

const ENTER_KEY = 13;

class TodoListCreate extends Component {
  handleSubmit(e) {
    if (e.which !== ENTER_KEY) {
      return;
    }

    const { createTodo } = this.props;
    const { value: title } = this.refs['new-todo'];

    if (title === '') {
      return;
    }

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

TodoListCreate.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default TodoListCreate;
