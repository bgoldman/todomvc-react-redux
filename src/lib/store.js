import { compose, createStore } from 'redux';

import persistState from 'redux-localstorage';

import { persistState as persistStateDev } from 'redux-devtools';

import config from './public-config';

import reducers from '../reducers';

import DevTools from '../components/dev-tools';

const isDev = (config.get('client.environment') === 'development');

const enhancer = isDev
  ? compose(
      DevTools.instrument(),
      persistStateDev(window.location.href.match(/[?&]debug_session=([^&#]+)\b/)),
    )
  : compose(
      persistState(),
    );

export default createStore(reducers, {}, enhancer);
