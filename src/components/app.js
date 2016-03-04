import React, { Component } from 'react';

import Footer from './layout/footer';
import TodosPage from './todos/pages';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <TodosPage />
        <Footer />
      </div>
    );
  }
}
