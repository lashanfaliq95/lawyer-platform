import React from 'react';
import { func, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Icon from 'components/Shared/Icon';
import messages from '../messages';

const UserAppointmentsList = ({
  formatMessages,
  userAppointments,
  activeAppointment,
  setActiveAppointment,
}) => (
  <ListGroup className='user-appointment-list'>
    {userAppointments.map((userAppointment) => {
      const {
        initials, name, occupation, appointment, id,
      } = userAppointment;
      const className = activeAppointment.id === id ? 'active' : '';
      return (
        <ListGroupItem
          className={`list-item ${className}`}
          onClick={() => {
            setActiveAppointment(userAppointment);
          }}
        >
          <div className='initials-icon'>{initials}</div>
          <div className='user-details'>
            {name}
            <br />
            {occupation}
            <br />
            {appointment}
          </div>
        </ListGroupItem>
      );
    })}
    <ListGroupItem>
      <Link to='/' className='no-hover'>
        <Icon name='calendar-check' />
        <span className='nav-text'>
          {formatMessages(messages.bookMoreAppointments)}
        </span>
      </Link>
    </ListGroupItem>
  </ListGroup>
);

UserAppointmentsList.propTypes = {
  userAppointments: shape({}).isRequired,
  activeAppointment: shape({}).isRequired,
  formatMessages: func.isRequired,
  setActiveAppointment: func.isRequired,
};

export default UserAppointmentsList;
