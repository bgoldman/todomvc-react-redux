import React, { Component, PropTypes } from 'react';

import { deleteTodo, updateTodo } from '../../../actions/todo';

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

class TodoListItemEdit extends Component {
  componentDidMount() {
    const { edit } = this.refs;

    edit.focus();
  }

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

  render() {
    const { stopEditing, todo } = this.props;
    const handleSubmit = this.handleSubmit.bind(this);

    return (
      <input
        ref="edit"
        className="edit"
        onKeyUp={handleSubmit}
        onBlur={stopEditing}
        defaultValue={todo.title}
      />
    );
  }
}

TodoListItemEdit.propTypes = {
  stopEditing: PropTypes.func.isRequired,
  todo:        PropTypes.object.isRequired,
};

export default TodoListItemEdit;
