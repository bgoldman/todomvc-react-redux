import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

import Store from '../../../lib/store';

import TodoList from '../partials/list';
import TodoListClear from '../partials/clear';
import TodoListCount from '../partials/count';
import TodoListCreate from '../partials/create';
import TodoListFilters from '../partials/filters';
import TodoListToggle from '../partials/toggle';

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
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoListCreate />
        </header>
        <section className="main">
          {filteredTodos.length > 0 &&
            <TodoListToggle todos={filteredTodos} />
          }
          <TodoList todos={filteredTodos} />
        </section>
        {todos.length > 0 &&
          <footer className="footer">
            <TodoListCount todos={todos} />
            <TodoListFilters filter={filter} />
            <TodoListClear />
          </footer>
        }
      </section>
    );
  }
}

TodosIndexPage.propTypes = {
  filter: PropTypes.string,
};

export default TodosIndexPage;
