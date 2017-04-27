import PropTypes from 'prop-types';
import React from 'react';

import { TodoPropType } from '../../../lib/prop-types';

import TodoList from '../partials/list';
import TodoListToggle from '../partials/toggle';

const TodoListMain = ({ completeAllTodos, deleteTodo, todos, uncompleteAllTodos, updateTodo }) => (
  <section className="main">
    {todos.length > 0 &&
      <TodoListToggle
        todos={todos}
        completeAllTodos={completeAllTodos}
        uncompleteAllTodos={uncompleteAllTodos}
      />
    }
    <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
  </section>
);

TodoListMain.propTypes = {
  completeAllTodos:   PropTypes.func.isRequired,
  deleteTodo:         PropTypes.func.isRequired,
  todos:              PropTypes.arrayOf(TodoPropType).isRequired,
  uncompleteAllTodos: PropTypes.func.isRequired,
  updateTodo:         PropTypes.func.isRequired,
};

export default TodoListMain;
