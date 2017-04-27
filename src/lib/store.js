import { compose, createStore } from 'redux';

import persistState from 'redux-localstorage';

import { persistState as persistStateDev } from 'redux-devtools'; // eslint-disable-line import/no-extraneous-dependencies

import config from './public-config';

import reducers from '../reducers';

import DevTools from '../components/dev-tools';

const isDev = (config.get('client.environment') === 'development');

const debugSession = (
  window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
  || [null, 'default']
)[1];

const enhancer = isDev
  ? compose(
      DevTools.instrument(),
      persistStateDev(debugSession),
    )
  : compose(
      persistState(),
    );

export default createStore(reducers, {}, enhancer);
