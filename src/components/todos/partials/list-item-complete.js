import React, { Component, PropTypes } from 'react';

import actions from '../../../actions/todo';

const { updateTodo } = actions;

class TodoListItemComplete extends Component {
  handleCheck() {
    const { todo } = this.props;
    const { checked: completed } = this.refs.checkbox;

    updateTodo(todo, { completed });
  }

  render() {
    const { todo } = this.props;
    const handleCheck = this.handleCheck.bind(this);

    return (
      <input
        ref="checkbox"
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheck}
      />
    );
  }
}

TodoListItemComplete.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoListItemComplete;
