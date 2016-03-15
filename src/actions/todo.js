import _ from 'lodash';

import Store from '../lib/store';

export function clearCompletedTodos() {
  const todos = Store.get('todos');
  const updatedTodos = _.reject(todos, todo => todo.completed);

  Store.set('todos', updatedTodos);
}

export function completeAllTodos() {
  const todos = Store.get('todos');

  _.each(todos, todo => {todo.completed = true;});
  Store.set('todos', todos);
}

export function createTodo(todo) {
  const todos = Store.get('todos');

  todos.push(todo);
  Store.set('todos', todos);
}

export function deleteTodo(todo) {
  const todos = Store.get('todos');
  const updatedTodos = _.reject(todos, t => todo === t);

  Store.set('todos', updatedTodos);
}

export function uncompleteAllTodos() {
  const todos = Store.get('todos');

  _.each(todos, todo => {todo.completed = false;});
  Store.set('todos', todos);
}

export function updateTodo(todo, changes) {
  const todos = Store.get('todos');

  _.each(changes, (value, key) => { todo[key] = value; });
  Store.set('todos', todos);
}
