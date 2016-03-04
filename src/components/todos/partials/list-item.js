import React, { Component } from 'react';

export default class TodoListItem extends Component {
  render() {
    const { todo } = this.props;

    return (
      <li className={todo.completed ? 'completed' : null}>
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={todo.completed} />
          <label>{todo.title}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" defaultValue={todo.title} />
      </li>
    );
  }
}
