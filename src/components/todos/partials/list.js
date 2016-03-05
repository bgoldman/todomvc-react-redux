import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

import TodoListItem from './list-item';

class TodoList extends Component {
  render() {
    const { todos } = this.props;

    return (
      <ul className="todo-list">
        {_.map(todos, (todo, i) => <TodoListItem key={i} todo={todo} />)}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
