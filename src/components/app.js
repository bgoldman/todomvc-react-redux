import React, { Component } from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router'

import Footer from './layout/footer';
import TodosPage from './todos/pages';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router history={hashHistory}>
          <Route path="/">
            <IndexRoute component={TodosPage} />
            <Route path="active" component={() => <TodosPage filter="active" />} />
            <Route path="completed" component={() => <TodosPage filter="completed" />} />
          </Route>
        </Router>
        <Footer />
      </div>
    );
  }
}
