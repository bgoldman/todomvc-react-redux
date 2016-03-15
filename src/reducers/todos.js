import _ from 'lodash';

import * as TodoActions from '../constants/actions/todo';

const initialState = [];

export default (state = initialState, action) => {
  const todos = state;

  switch (action.type) {
    case TodoActions.CLEARED_COMPLETED:
      return _.reject(todos, todo => todo.completed);
    case TodoActions.COMPLETED_ALL:
      return _.map(todos, todo => {
        if (todo.completed) {
          return todo;
        }

        return _.assign({}, todo, { completed: true });
      });
    case TodoActions.CREATED_TODO:
      return [...todos, action.todo];
    case TodoActions.DELETED_TODO:
      return _.reject(todos, todo => todo === action.todo);
    case TodoActions.UNCOMPLETED_ALL:
      return _.map(todos, todo => {
        if (!todo.completed) {
          return todo;
        }

        return _.assign({}, todo, { completed: false });
      });
    case TodoActions.UPDATED_TODO:
      return _.map(todos, todo => {
        if (todo !== action.todo) {
          return todo;
        }

        return _.assign({}, action.todo, action.changes);
      });
    default:
      return todos;
  }
};
