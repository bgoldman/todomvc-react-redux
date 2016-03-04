import _ from 'lodash';
import React, { Component } from 'react';

import TodoListItem from './list-item';

export default class TodoList extends Component {
  render() {
    const { todos } = this.props;

    return (
      <ul className="todo-list">
        {
          _.map(todos, (todo, i) => {
            return <TodoListItem key={i} todo={todo} />;
          })
        }
      </ul>
    );
  }
}
