import React, { Component, PropTypes } from 'react';

const ENTER_KEY = 13;

class TodoListCreate extends Component {
  handleSubmit(e) {
    if (e.which !== ENTER_KEY) {
      return;
    }

    const { createTodo } = this.props;
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

TodoListCreate.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default TodoListCreate;
