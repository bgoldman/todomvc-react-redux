import React, { Component } from 'react';

export default class LayoutFooter extends Component {
  render() {
    return (
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="http://www.brandongoldman.com">Brandon Goldman</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    );
  }
}
