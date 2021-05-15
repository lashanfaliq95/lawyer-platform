import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
  IoCheckmarkOutline,
  IoCloseOutline,
  IoMailOpenOutline,
} from 'react-icons/io5';
import { defineMessages, useIntl } from 'react-intl';

import { APPOINTMENT_TYPES } from 'components/Shared/constants';

const messages = defineMessages({
  title: {
    id: 'app.proAppointment.actions.title',
    defaultMessage: 'Actions',
  },
  confirmAppointment: {
    id: 'app.proAppointment.actions.confirmAppointment',
    defaultMessage: 'Confirm Appointment',
  },
  denyInquiry: {
    id: 'app.proAppointment.actions.denyInquiry',
    defaultMessage: 'Deny Inquiry',
  },
  rescheduleAppointment: {
    id: 'app.proAppointment.actions.rescheduleAppointment',
    defaultMessage: 'Reschedule Appointment',
  },
  cancelAppointment: {
    id: 'app.proAppointment.actions.cancelAppointment',
    defaultMessage: 'Cancel Appointment',
  },
  sendMessage: {
    id: 'app.proAppointment.actions.sendMessage',
    defaultMessage: 'Send Message',
  },
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  display: block;
  font-size: 0.9rem;
`;

const ActionItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  ${({ right }) =>
    right &&
    css`
      flex-direction: row;
      cursor: pointer;
    `}

  ${Label}:nth-child(3) {
    margin-top: 1rem;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d2d2d2;
  border-radius: 10px;

  ${ActionItem}:not(:last-child) {
    border-bottom: 1px solid #d2d2d2;
  }
`;

const SubTitle = styled.span`
  font-size: 1.2rem;
  margin: 1rem 0rem;
  display: block;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ background }) =>
    background &&
    css`
      background-color: #d2d2d2;
    `}
`;

const IconLabel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0rem 1rem;
`;

function AppointmentActions({
  type,
  onCancelAppointment,
  onConfirmInquiry,
  onDenyInquiry,
  onRescheduleAppointment,
  onSendMessage,
}) {
  const intl = useIntl();

  return (
    <Container>
      <SubTitle>{intl.formatMessage(messages.title)}</SubTitle>
      {(() => {
        switch (type) {
          case APPOINTMENT_TYPES.INQUIRIES:
            return (
              <ActionContainer>
                <ActionItem right onClick={onConfirmInquiry}>
                  <IconContainer background>
                    <IoCheckmarkOutline size={25} />
                  </IconContainer>
                  <IconLabel>
                    {intl.formatMessage(messages.confirmAppointment)}
                  </IconLabel>
                  <IconContainer>
                    <MdKeyboardArrowRight size={30} color='gray' />
                  </IconContainer>
                </ActionItem>
                <ActionItem right onClick={onDenyInquiry}>
                  <IconContainer background>
                    <IoCloseOutline size={25} />
                  </IconContainer>
                  <IconLabel>
                    {intl.formatMessage(messages.denyInquiry)}
                  </IconLabel>
                  <IconContainer>
                    <MdKeyboardArrowRight size={30} color='gray' />
                  </IconContainer>
                </ActionItem>
              </ActionContainer>
            );
          case APPOINTMENT_TYPES.UPCOMING:
            return (
              <ActionContainer>
                <ActionItem right onClick={onRescheduleAppointment}>
                  <IconContainer background>
                    <IoCheckmarkOutline size={25} />
                  </IconContainer>
                  <IconLabel>
                    {intl.formatMessage(messages.rescheduleAppointment)}
                  </IconLabel>
                  <IconContainer>
                    <MdKeyboardArrowRight size={30} color='gray' />
                  </IconContainer>
                </ActionItem>
                <ActionItem right onClick={onCancelAppointment}>
                  <IconContainer background>
                    <IoCloseOutline size={25} />
                  </IconContainer>
                  <IconLabel>
                    {intl.formatMessage(messages.cancelAppointment)}
                  </IconLabel>
                  <IconContainer>
                    <MdKeyboardArrowRight size={30} color='gray' />
                  </IconContainer>
                </ActionItem>
              </ActionContainer>
            );
          default:
            return (
              <ActionContainer>
                <ActionItem right onClick={onSendMessage}>
                  <IconContainer background>
                    <IoMailOpenOutline size={25} />
                  </IconContainer>
                  <IconLabel>
                    {intl.formatMessage(messages.sendMessage)}
                  </IconLabel>
                  <IconContainer>
                    <MdKeyboardArrowRight size={30} color='gray' />
                  </IconContainer>
                </ActionItem>
              </ActionContainer>
            );
        }
      })()}
    </Container>
  );
}

AppointmentActions.propTypes = {
  type: PropTypes.number,
  onCancelAppointment: PropTypes.func.isRequired,
  onConfirmInquiry: PropTypes.func.isRequired,
  onDenyInquiry: PropTypes.func.isRequired,
  onRescheduleAppointment: PropTypes.func.isRequired,
  onSendMessage: PropTypes.func.isRequired,
};

AppointmentActions.defaultProps = {
  type: APPOINTMENT_TYPES.UPCOMING,
};

export default AppointmentActions;
