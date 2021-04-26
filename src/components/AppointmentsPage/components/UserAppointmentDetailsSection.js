import React from 'react';
import { Link } from 'react-router-dom';
import { func, shape, boolean } from 'prop-types';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import messages from '../messages';
import AppointmentCancellationModal from './AppointmentCancellationModal';

const UserAppointmentDetailSection = ({
  formatMessages,
  userAppointmentDetails,
  toggleCancellationModal,
  isPastAppointments,
}) => (
  <>
    <ListGroup className='user-details-list'>
      <ListGroupItem className='list-item'>
        <div className='initials-icon'>{userAppointmentDetails.initials}</div>
        <div className='user-details'>
          {userAppointmentDetails.name}
          <br />
          {userAppointmentDetails.occupation}
          <br />
          {userAppointmentDetails.appointment}
        </div>
      </ListGroupItem>
      <ListGroupItem>
        <span className='list-item-title'>
          {formatMessages(messages.legalIssue)}
        </span>
        <br />
        {userAppointmentDetails.legalIssue}
      </ListGroupItem>
      <ListGroupItem>
        <span className='list-item-title'>
          {formatMessages(messages.typeOfAppointment)}
        </span>
        <br />
        {userAppointmentDetails.typeOfAppointment}
      </ListGroupItem>
      <ListGroupItem className='address'>
        <div>
          <span className='list-item-title'>
            {formatMessages(messages.address)}
          </span>
          <br />
          {userAppointmentDetails.address}
        </div>
        <div className='directions'>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${userAppointmentDetails.lat},${userAppointmentDetails.lon}`}
            target='_blank'
            rel='noreferrer'
          >
            {formatMessages(messages.directions)}
          </a>
        </div>
      </ListGroupItem>
      <ListGroupItem>
        <span className='list-item-title'>
          {formatMessages(messages.access)}
        </span>
        <br />
        {userAppointmentDetails.access}
      </ListGroupItem>
      <ListGroupItem>
        <span className='list-item-title'>
          {formatMessages(messages.phoneNumber)}
        </span>
        <br />
        {userAppointmentDetails.phoneNumber}
      </ListGroupItem>
      <ListGroupItem>
        <span className='list-item-title'>
          {formatMessages(messages.standardMessage)}
        </span>
        <br />
        {userAppointmentDetails.standardMessage}
      </ListGroupItem>
      {!isPastAppointments ? (
        <ListGroupItem className='list-footer'>
          <Button
            color='secondary'
            onClick={() => toggleCancellationModal(true)}
          >
            {formatMessages(messages.cancelAppointment)}
          </Button>
          <Button color='primary'>
            {formatMessages(messages.changeAppointment)}
          </Button>
        </ListGroupItem>
      ) : (
        <ListGroupItem className='list-footer past-appointments'>
          <Button color='primary'>
            <Link to={`/search/lawyer-details/${userAppointmentDetails.id}`}>
              {formatMessages(messages.rebookAppointment)}
            </Link>
          </Button>
        </ListGroupItem>
      )}
    </ListGroup>
    {!isPastAppointments && (
      <AppointmentCancellationModal id={userAppointmentDetails.id} />
    )}
  </>
);

UserAppointmentDetailSection.propTypes = {
  userAppointmentDetails: shape({}).isRequired,
  formatMessages: func.isRequired,
  toggleCancellationModal: func.isRequired,
  isPastAppointments: boolean,
};

UserAppointmentDetailSection.defaultProps = {
  isPastAppointments: false,
};

export default UserAppointmentDetailSection;
