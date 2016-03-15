import React, { PropTypes } from 'react';

import { TodoPropType } from '../../../lib/prop-types';

const TodoListItemDelete = ({ deleteTodo, todo }) => {
  const handleClick = deleteTodo.bind(this, todo);

  return (
    <button className="destroy" onClick={handleClick} />
  );
};

TodoListItemDelete.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todo:       TodoPropType.isRequired,
};

export default TodoListItemDelete;
