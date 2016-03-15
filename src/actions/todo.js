import * as TodoActions from '../constants/actions/todo';

export function clearCompletedTodos() {
  return {
    type: TodoActions.CLEARED_COMPLETED,
  };
}

export function completeAllTodos() {
  return {
    type: TodoActions.COMPLETED_ALL,
  };
}

export function createTodo(todo) {
  return {
    type: TodoActions.CREATED_TODO,
    todo,
  };
}

export function deleteTodo(todo) {
  return {
    type: TodoActions.DELETED_TODO,
    todo,
  };
}

export function uncompleteAllTodos() {
  return {
    type: TodoActions.UNCOMPLETED_ALL,
  };
}

export function updateTodo(todo, changes) {
  return {
    type: TodoActions.UPDATED_TODO,
    todo,
    changes,
  };
}
