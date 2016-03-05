import classNames from 'classnames';
import React, { Component } from 'react';

export default class TodoListFilters extends Component {
  render() {
    const { filter } = this.props;

    return (
      <div>
        <ul className="filters">
          <li>
            <a className={classNames({selected: !filter})} href="#/">All</a>
          </li>
          <li>
            <a
              className={classNames({selected: filter === 'active'})}
              href="#/active"
            >Active</a>
          </li>
          <li>
            <a
              className={classNames({selected: filter === 'completed'})}
              href="#/completed"
            >Completed</a>
          </li>
        </ul>
      </div>
    );
  }
}
