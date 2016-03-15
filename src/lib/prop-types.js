import { PropTypes } from 'react';

export const TodoPropType = PropTypes.shape({
  title:     PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});
