import React from 'react';

import config from '../../lib/public-config';

export default () => (
  <footer className="info">
    <p>Double-click to edit a todo</p>
    <p>Created by <a href="http://www.brandongoldman.com">Brandon Goldman</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    <p>Environment: {config.get('client.environment')}</p>
  </footer>
);
