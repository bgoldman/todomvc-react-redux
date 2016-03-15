import React from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import Footer from './layout/footer';
import TodosPage from './todos/pages';

export default () => {
  const ActiveTodosPage = () => <TodosPage filter="active" />;
  const CompletedTodosPage = () => <TodosPage filter="completed" />;

  return (
    <div className="app-container">
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={TodosPage} />
          <Route path="active" component={ActiveTodosPage} />
          <Route path="completed" component={CompletedTodosPage} />
        </Route>
      </Router>
      <Footer />
    </div>
  );
};
