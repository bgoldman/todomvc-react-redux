/* eslint-disable import/prefer-default-export */
// remove this once you've added a second prop type helper

import _ from 'lodash';
import PropTypes from 'prop-types';

export function convertActionsToPropType(actions) {
  return PropTypes.shape(
    _(actions)
      .keys()
      .map(action => [action, PropTypes.func.isRequired])
      .fromPairs()
      .value(),
  );
}
