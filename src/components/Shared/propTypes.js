/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

export const SelectOptionType = PropTypes.shape({
  value: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
});

export default {};
