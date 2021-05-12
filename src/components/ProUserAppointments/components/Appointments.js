import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { AppointmentPropType } from 'helpers/types';
import Appointment from './Appointment';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0rem;
`;

const Title = styled.span`
  display: block;
  padding: 1rem 0;
  font-weight: 500;
  font-size: 1.3rem;
`;

const AppointmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  overflow: hidden;

  &:last-child {
    border-bottom: none;
  }
`;

function Appointments({ appointments, title, onAppointmentClick }) {
  return (
    appointments.length !== 0 && (
      <Container>
        <Title>{title}</Title>
        <AppointmentsContainer>
          {appointments.map((appointment, index) => (
            <Appointment
              appointment={appointment}
              index={index}
              key={appointment.id}
              onAppointmentClick={onAppointmentClick}
            />
          ))}
        </AppointmentsContainer>
      </Container>
    )
  );
}

Appointments.propTypes = {
  appointments: PropTypes.arrayOf(AppointmentPropType).isRequired,
  title: PropTypes.string.isRequired,
  onAppointmentClick: PropTypes.func,
};

Appointments.defaultProps = {
  onAppointmentClick: () => {},
};

Appointments.defaultProps = {};

export default Appointments;
