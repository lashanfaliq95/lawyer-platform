import React from 'react';
import { func, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Icon from 'components/Shared/Icon';
import messages from '../messages';

const UserAppointmentsList = ({ formatMessages, userAppointments }) => (
  <ListGroup className='user-appointment-list'>
    {userAppointments.map((userAppointment) => (
      <ListGroupItem className='list-item'>
        <div className='initials-icon'>{userAppointment.initials}</div>
        <div className='user-details'>
          {userAppointment.name}
          <br />
          {userAppointment.occupation}
          <br />
          {userAppointment.appointment}
        </div>
      </ListGroupItem>
    ))}
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
  formatMessages: func.isRequired,
};

export default UserAppointmentsList;
