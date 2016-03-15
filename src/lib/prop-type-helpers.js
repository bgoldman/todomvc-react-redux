import _ from 'lodash';
import { PropTypes } from 'react';

export function convertActionsToPropType(actions) {
  return PropTypes.shape(
    _(actions)
      .keys()
      .map(action => [action, PropTypes.func.isRequired])
      .fromPairs()
      .value()
  );
}
