import classNames from 'classnames';
import React, { Component } from 'react';

import actions from '../../../actions/todo';

const { deleteTodo } = actions;

export default class TodoListItemDelete extends Component {
  handleClick() {
    const { todo } = this.props;

    deleteTodo(todo);
  }

  render() {
    const { todo } = this.props;

    return (
      <button className="destroy" onClick={this.handleClick.bind(this)} />
    );
  }
}
