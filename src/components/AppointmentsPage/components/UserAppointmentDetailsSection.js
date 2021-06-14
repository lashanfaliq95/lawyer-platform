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
  isAppointmentSummary,
}) => {
  const {
    id,
    initials,
    name,
    occupation,
    appointment,
    typeOfAppointment,
    road,
    houseNumber,
    zipCode,
    city,
    phoneNumber,
    standardMessage,
    buildingParking,
    buildingFloor,
    lat,
    lon,
    isAppointmentViaPhone,
    imgUrl,
  } = userAppointmentDetails;

  return (
    <>
      <ListGroup
        className={`user-details-list ${
          isAppointmentSummary ? 'no-border-radius' : ''
        }`}
      >
        <ListGroupItem className='list-item'>
          {!isAppointmentSummary ? (
            <div className='initials-icon'>{initials}</div>
          ) : (
            <img className='profile-image' src={imgUrl} alt='Lawyer' />
          )}
          <div className='user-details'>
            {name}
            <br />
            {occupation}
            <br />
            {appointment === 2 ? '2020.06.15 10:30' : '2020.06.15 11:30'}
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <span className='list-item-title'>
            {formatMessages(messages.legalIssue)}
          </span>
          <br />
          {typeOfAppointment}
        </ListGroupItem>
        <ListGroupItem>
          <span className='list-item-title'>
            {formatMessages(messages.typeOfAppointment)}
          </span>
          <br />
          {formatMessages(
            isAppointmentViaPhone
              ? messages.appointmentViaPhone
              : messages.personnelAppointments,
          )}
        </ListGroupItem>
        <ListGroupItem className='address'>
          <div>
            <span className='list-item-title'>
              {formatMessages(messages.address)}
            </span>
            <br />
            {`${road} ${houseNumber}`}
            <br />
            {` ${zipCode} ${city}`}
          </div>
          <div className='directions'>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`}
              target='_blank'
              rel='noopener noreferrer'
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
          {`${buildingParking}. ${buildingFloor}`}
        </ListGroupItem>
        <ListGroupItem>
          <span className='list-item-title'>
            {formatMessages(messages.phoneNumber)}
          </span>
          <br />
          {phoneNumber}
        </ListGroupItem>
        {standardMessage && (
          <ListGroupItem>
            <span className='list-item-title'>
              {formatMessages(messages.standardMessage)}
            </span>
            <br />
            {standardMessage}
          </ListGroupItem>
        )}
        {!isPastAppointments && !isAppointmentSummary && (
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
        )}

        {isPastAppointments && !isAppointmentSummary && (
          <ListGroupItem className='list-footer past-appointments'>
            <Button color='primary'>
              <Link to={`/search/lawyer-details/${id}`}>
                {formatMessages(messages.rebookAppointment)}
              </Link>
            </Button>
          </ListGroupItem>
        )}
      </ListGroup>
      {!isPastAppointments && !isAppointmentSummary && (
        <AppointmentCancellationModal id={id} />
      )}
    </>
  );
};

UserAppointmentDetailSection.propTypes = {
  userAppointmentDetails: shape({}).isRequired,
  formatMessages: func.isRequired,
  toggleCancellationModal: func.isRequired,
  isPastAppointments: boolean,
  isAppointmentSummary: boolean,
};

UserAppointmentDetailSection.defaultProps = {
  isPastAppointments: false,
  isAppointmentSummary: false,
};

export default UserAppointmentDetailSection;
