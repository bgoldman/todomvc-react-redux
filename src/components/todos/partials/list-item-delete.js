import React, { PropTypes } from 'react';

import { deleteTodo } from '../../../actions/todo';

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
