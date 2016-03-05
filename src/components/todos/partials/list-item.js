import classNames from 'classnames';
import React, { Component } from 'react';

import TodoListItemComplete from './list-item-complete';
import TodoListItemDelete from './list-item-delete';
import TodoListItemEdit from './list-item-edit';

import actions from '../../../actions/todo';

export default class TodoListItem extends Component {
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
    const { todo }      = this.props;
    const { isEditing } = this.state;

    return (
      <li className={classNames({ completed: todo.completed, editing: isEditing })}>
        <div className="view">
          <TodoListItemComplete todo={todo} />
          <label ref="label" onDoubleClick={this.startEditing.bind(this)}>{todo.title}</label>
          <TodoListItemDelete todo={todo} />
        </div>
        {isEditing &&
          <TodoListItemEdit todo={todo} stopEditing={this.stopEditing.bind(this)} />
        }
      </li>
    );
  }
}
