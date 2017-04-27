import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as TodoActions from '../../../actions/todo';

import { convertActionsToPropType } from '../../../lib/prop-type-helpers';
import { TodoPropType } from '../../../lib/prop-types';

import TodoListFooter from '../partials/footer';
import TodoListHeader from '../partials/header';
import TodoListMain from '../partials/main';

class TodosIndexPage extends Component {
  filteredTodos() {
    const { filter, todos } = this.props;

    if (!filter) {
      return todos;
    }

    return _.filter(todos, todo => todo.completed === (filter === 'completed'));
  }

  render() {
    const {
      filter,
      todoActions: {
        clearCompletedTodos,
        completeAllTodos,
        createTodo,
        deleteTodo,
        uncompleteAllTodos,
        updateTodo,
      },
      todos,
    } = this.props;

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
  filter:      PropTypes.string,
  todoActions: convertActionsToPropType(TodoActions),
  todos:       PropTypes.arrayOf(TodoPropType).isRequired,
};

const mapDispatchToProps = dispatch => ({
  todoActions: bindActionCreators(TodoActions, dispatch),
});

const mapStateToProps = (state) => {
  const { todos } = state;

  return { todos };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosIndexPage);
