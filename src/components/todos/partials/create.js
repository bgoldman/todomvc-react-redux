import React, { Component } from 'react';

export default class TodoListCreate extends Component {
  render() {
    return (
      <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
    );
  }
}
