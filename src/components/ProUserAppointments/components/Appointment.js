import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { APPOINTMENT_COLORS } from 'helpers/constants';
import { AppointmentPropType } from 'helpers/types';

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #d2d2d2;
  padding: 0.5rem;
  position: relative;
  cursor: pointer;
  background-color: #ffffff;
`;

const IconContainer = styled.div`
  margin-right: auto;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  background-color: #225393;

  ${({ index }) => {
    if (index === undefined) {
      return css``;
    }
    const { backgroundColor, textColor } = APPOINTMENT_COLORS[
      index % APPOINTMENT_COLORS.length
    ];
    return css`
      background-color: ${backgroundColor};
      color: ${textColor};
    `;
  }}
`;

const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: center;
`;

const Label = styled.span`
  font-size: 0.8rem;
`;

const Title = styled(Label)`
  font-weight: 500;
  font-size: 1rem;
`;

function Appointment({ appointment, index, onAppointmentClick }) {
  const {
    id,
    user: { firstName, lastName },
    date,
  } = appointment;

  function handleOnClick() {
    onAppointmentClick(appointment);
  }

  return (
    <Container onClick={handleOnClick}>
      <IconContainer index={index}>
        {`${firstName[0]}${lastName[0]}`}
      </IconContainer>
      <DetailsContainer>
        <Title>{`${firstName} ${lastName}`}</Title>
        <Label>{moment(date).format('dddd, DD. MMMM, YYYY, HH:mm')}</Label>
      </DetailsContainer>
    </Container>
  );
}

Appointment.propTypes = {
  appointment: AppointmentPropType.isRequired,
  index: PropTypes.number.isRequired,
  onAppointmentClick: PropTypes.func,
};

Appointment.defaultProps = {
  onAppointmentClick: () => {},
};

export default Appointment;
