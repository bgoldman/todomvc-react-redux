import React, { Component } from 'react';

export default class TodoListToggle extends Component {
  render() {
    return (
      <div>
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    );
  }
}


