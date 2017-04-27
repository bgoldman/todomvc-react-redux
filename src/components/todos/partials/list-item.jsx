import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { TodoPropType } from '../../../lib/prop-types';

import TodoListItemComplete from './list-item-complete';
import TodoListItemDelete from './list-item-delete';
import TodoListItemEdit from './list-item-edit';

class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: false };
  }

  startEditing() {
    this.setState({ isEditing: true });
  }

  stopEditing() {
    this.setState({ isEditing: false });
  }

  render() {
    const { deleteTodo, todo, updateTodo } = this.props;
    const { isEditing } = this.state;
    const startEditing = this.startEditing.bind(this);
    const stopEditing = this.stopEditing.bind(this);

    return (
      <li className={classNames({ completed: todo.completed, editing: isEditing })}>
        <div className="view">
          <TodoListItemComplete todo={todo} updateTodo={updateTodo} />
          <label ref="label" onDoubleClick={startEditing}>{todo.title}</label>
          <TodoListItemDelete todo={todo} deleteTodo={deleteTodo} />
        </div>
        {isEditing &&
          <TodoListItemEdit
            todo={todo}
            stopEditing={stopEditing}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        }
      </li>
    );
  }
}

TodoListItem.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todo:       TodoPropType.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
