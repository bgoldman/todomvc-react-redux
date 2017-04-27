import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Page from './layout/page';
import TodosPage from './todos/pages';

export default () => {
  const ActiveTodosPage = () => <TodosPage filter="active" />;
  const CompletedTodosPage = () => <TodosPage filter="completed" />;

  return (
    <Router>
      <Page>
        <Route exact path="/" component={TodosPage} />
        <Route path="/active" component={ActiveTodosPage} />
        <Route path="/completed" component={CompletedTodosPage} />
      </Page>
    </Router>
  );
};
