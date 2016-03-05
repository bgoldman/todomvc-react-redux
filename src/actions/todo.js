import _ from 'lodash';

import Store from '../lib/store';

export default {
  clearCompletedTodos() {
    const todos = Store.get('todos');
    const updatedTodos = _.reject(todos, todo => todo.completed);

    Store.set('todos', updatedTodos);
  },

  completeAllTodos() {
    const todos = Store.get('todos');

    _.each(todos, todo => {todo.completed = true;});
    Store.set('todos', todos);
  },

  createTodo(todo) {
    const todos = Store.get('todos');

    todos.push(todo);
    Store.set('todos', todos);
  },

  deleteTodo(todo) {
    const todos = Store.get('todos');
    const updatedTodos = _.reject(todos, t => todo === t);

    Store.set('todos', updatedTodos);
  },

  uncompleteAllTodos() {
    const todos = Store.get('todos');

    _.each(todos, todo => {todo.completed = false;});
    Store.set('todos', todos);
  },

  updateTodo(todo, changes) {
    const todos = Store.get('todos');

    _.each(changes, (value, key) => { todo[key] = value; });
    Store.set('todos', todos);
  },
};
