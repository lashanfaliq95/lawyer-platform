import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Modal, ModalBody } from 'reactstrap';
import { defineMessages, useIntl } from 'react-intl';
import { useSetState } from 'react-use';
import moment from 'moment';
import { IoCheckmarkOutline } from 'react-icons/io5';

import TimeSlots from 'components/Shared/TimeSlots/TimeSlots';

const messages = defineMessages({
  title: {
    id: 'app.proAppointment.appointmentReschedule.title',
    defaultMessage: 'Please Select an Appointment Timeslot',
  },
  cancel: {
    id: 'app.proAppointment.appointmentReschedule.cancel',
    defaultMessage: 'Cancel',
  },
  rescheduleAppointment: {
    id: 'app.proAppointment.appointmentReschedule.rescheduleAppointment',
    defaultMessage: 'Reschedule Appointment',
  },
  appointmentRescheduled: {
    id: 'app.proAppointment.appointmentReschedule.appointmentRescheduled',
    defaultMessage: 'Appointment Rescheduled',
  },
});

const Title = styled.div`
  padding: 1rem;
  text-align: center;
  font-weight: 500;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const Footer = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;

  &:focus {
    outline: none;
  }

  ${({ primary, disabled, success }) => {
    if (success) {
      return css`
        color: #ffffff;
        background-color: #478bba;
      `;
    }
    if (disabled) {
      return css`
        color: #ffffff;
        background-color: #7f7f7f;
      `;
    }
    if (primary) {
      return css`
        color: #ffffff;
        background-color: #0061c0;
      `;
    }
    return css`
      color: #0061c0;
    `;
  }}
`;

const CheckMark = styled(IoCheckmarkOutline)`
  margin-right: 0.5rem;
`;

function AppointmentReschedule({ isOpen, onToggle, currentSelectedTimeSlot }) {
  const intl = useIntl();

  const [
    { selectedTimeSlot, isRescheduleLoading, isRescheduleSuccess },
    setState,
  ] = useSetState({
    selectedTimeSlot: currentSelectedTimeSlot,
    isRescheduleLoading: false,
    isRescheduleSuccess: false,
  });

  function setSelectedTimeSlot(updatedTimeSlot) {
    setState({ selectedTimeSlot: updatedTimeSlot });
  }

  function handleReschedule() {
    //  TODO: Reschedule API call.
    setState({ isRescheduleSuccess: true });

    setTimeout(() => {
      onToggle();
    }, 4000);
  }

  const isTimeStampDifferent =
    selectedTimeSlot &&
    !moment(currentSelectedTimeSlot).isSame(moment(selectedTimeSlot), 'minute');

  return (
    <Modal
      backdrop='static'
      isOpen={isOpen}
      toggle={onToggle}
      centered
      size='lg'
    >
      <ModalBody>
        <Container>
          <Title>{intl.formatMessage(messages.title)}</Title>
          <TimeSlots
            selected={selectedTimeSlot}
            onSelectedDateTimeChange={setSelectedTimeSlot}
          />
          <Footer>
            <Button onClick={onToggle}>
              {intl.formatMessage(messages.cancel)}
            </Button>
            <Button
              primary
              success={isRescheduleSuccess}
              disabled={
                isRescheduleLoading ||
                isRescheduleSuccess ||
                (!isRescheduleSuccess && !isTimeStampDifferent)
              }
              onClick={handleReschedule}
            >
              {isRescheduleSuccess && <CheckMark />}
              {isRescheduleSuccess
                ? intl.formatMessage(messages.appointmentRescheduled)
                : intl.formatMessage(messages.rescheduleAppointment)}
            </Button>
          </Footer>
        </Container>
      </ModalBody>
    </Modal>
  );
}

AppointmentReschedule.propTypes = {
  currentSelectedTimeSlot: PropTypes.instanceOf(Date).isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

AppointmentReschedule.defaultProps = {
  isOpen: false,
  onToggle: () => {},
};

export default AppointmentReschedule;
