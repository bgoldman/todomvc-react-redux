import React, { Component, PropTypes } from 'react';

import actions from '../../../actions/todo';

const { deleteTodo } = actions;

const TodoListItemDelete = ({ todo }) => {
  const handleClick = deleteTodo.bind(this, todo);

  return (
    <button className="destroy" onClick={handleClick} />
  );
};

TodoListItemDelete.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoListItemDelete;
