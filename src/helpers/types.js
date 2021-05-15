import PropTypes from 'prop-types';

export const AppointmentPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  type: PropTypes.number.isRequired,
});

export default {};
