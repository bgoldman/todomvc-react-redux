import React, { PropTypes } from 'react';

const TodoListItemDelete = ({ deleteTodo, todo }) => {
  const handleClick = deleteTodo.bind(this, todo);

  return (
    <button className="destroy" onClick={handleClick} />
  );
};

TodoListItemDelete.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todo:       PropTypes.object.isRequired,
};

export default TodoListItemDelete;
