/* eslint-disable import/prefer-default-export */
// remove this once you've added a second prop type

import PropTypes from 'prop-types';

export const TodoPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});
