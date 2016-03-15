import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import reducers from '../reducers';

const createPersistentStore = compose(
  persistState()
)(createStore);

export default createPersistentStore(reducers);
