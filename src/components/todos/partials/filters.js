import classNames from 'classnames';
import React, { PropTypes } from 'react';

const TodoListFilters = ({ filter }) => (
  <div>
    <ul className="filters">
      <li>
        <a className={classNames({ selected: !filter })} href="#/">All</a>
      </li>
      <li>
        <a
          className={classNames({ selected: filter === 'active' })}
          href="#/active"
        >Active</a>
      </li>
      <li>
        <a
          className={classNames({ selected: filter === 'completed' })}
          href="#/completed"
        >Completed</a>
      </li>
    </ul>
  </div>
);

TodoListFilters.propTypes = {
  filter: PropTypes.string,
};

export default TodoListFilters;
