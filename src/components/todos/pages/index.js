import React, { Component } from 'react';

import TodoList from '../partials/list';
import TodoListClear from '../partials/list-clear';
import TodoListCount from '../partials/list-count';
import TodoListCreate from '../partials/create';
import TodoListFilters from '../partials/list-filters';
import TodoListToggle from '../partials/list-toggle';

export default class TodosIndexPage extends Component {
  constructor() {
    super();

    const todos = [
      {
        title:     'Taste Javascript',
        completed: true
      },
      {
        title:     'Buy a unicorn',
        completed: false
      }
    ];

    this.state = { todos };
  }

  render() {
    const { todos } = this.state;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoListCreate />
        </header>
        <section className="main">
          <TodoListToggle />
          <TodoList todos={todos} />
        </section>
        <footer className="footer">
          <TodoListCount todos={todos} />
          <TodoListFilters />
          <TodoListClear />
        </footer>
      </section>
    );
  }
}
