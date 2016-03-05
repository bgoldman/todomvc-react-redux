import React, { Component, PropTypes } from 'react';

import actions from '../../../actions/todo';

const { deleteTodo } = actions;

class TodoListItemDelete extends Component {
  handleClick() {
    const { todo } = this.props;

    deleteTodo(todo);
  }

  render() {
    const handleClick = this.handleClick.bind(this);

    return (
      <button className="destroy" onClick={handleClick} />
    );
  }
}

TodoListItemDelete.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoListItemDelete;
