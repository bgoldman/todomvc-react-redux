import React from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import Page from './layout/page';
import TodosPage from './todos/pages';

export default () => {
  const ActiveTodosPage = () => <TodosPage filter="active" />;
  const CompletedTodosPage = () => <TodosPage filter="completed" />;

  return (
    <Page>
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={TodosPage} />
          <Route path="active" component={ActiveTodosPage} />
          <Route path="completed" component={CompletedTodosPage} />
        </Route>
      </Router>
    </Page>
  );
};
