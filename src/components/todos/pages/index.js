import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

import Store from '../../../lib/store';

import {
  clearCompletedTodos,
  completeAllTodos,
  createTodo,
  deleteTodo,
  uncompleteAllTodos,
  updateTodo,
} from '../../../actions/todo';

import TodoListFooter from '../partials/footer';
import TodoListHeader from '../partials/header';
import TodoListMain from '../partials/main';

class TodosIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [] };
  }

  componentDidMount() {
    Store.subscribe('todos', this);
  }

  componentWillUnmount() {
    Store.unsubscribe('todos', this);
  }

  filteredTodos() {
    const { filter } = this.props;
    const { todos } = this.state;

    if (!filter) {
      return todos;
    }

    return _.filter(todos, todo => todo.completed === (filter === 'completed'));
  }

  render() {
    const { filter } = this.props;
    const { todos } = this.state;
    const filteredTodos = this.filteredTodos();

    return (
      <div>
        <TodoListHeader createTodo={createTodo} />
        <TodoListMain
          todos={filteredTodos}
          completeAllTodos={completeAllTodos}
          deleteTodo={deleteTodo}
          uncompleteAllTodos={uncompleteAllTodos}
          updateTodo={updateTodo}
        />
        {todos.length > 0 &&
          <TodoListFooter
            filter={filter}
            todos={todos}
            clearCompletedTodos={clearCompletedTodos}
          />
        }
      </div>
    );
  }
}

TodosIndexPage.propTypes = {
  filter: PropTypes.string,
};

export default TodosIndexPage;
