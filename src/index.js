import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './lib/store';

import App from './components/app';

const provider = React.createElement(Provider, { store }, React.createElement(App));

render(provider, document.getElementById('app'));
