import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

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
    const { todo } = this.props;
    const { isEditing } = this.state;
    const startEditing = this.startEditing.bind(this);
    const stopEditing = this.stopEditing.bind(this);

    return (
      <li className={classNames({ completed: todo.completed, editing: isEditing })}>
        <div className="view">
          <TodoListItemComplete todo={todo} />
          <label ref="label" onDoubleClick={startEditing}>{todo.title}</label>
          <TodoListItemDelete todo={todo} />
        </div>
        {isEditing &&
          <TodoListItemEdit todo={todo} stopEditing={stopEditing} />
        }
      </li>
    );
  }
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoListItem;
