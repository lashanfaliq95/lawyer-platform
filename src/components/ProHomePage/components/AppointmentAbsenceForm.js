import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages } from 'react-intl';
import { useSetState } from 'react-use';
import { FaTimes } from 'react-icons/fa';

import intl from 'helpers/intlHelper';
import { CALENDAR_FORM_TYPES } from 'components/Shared/constants';
import { Container, StyledModal, StyledModalBody } from 'components/Shared';
import {
  Title,
  TitleContainer,
  TitleContainerSeparator,
  CancelButton,
} from '.';
import AppointmentForm from './AppointmentForm';
import AbsenceForm from './AbsenceForm';

const messages = defineMessages({
  newAppointment: {
    id: 'app.proHomePage.appointmentAbsenceForm.newAppointment',
    defaultMessage: 'New Appointment',
  },
  upcomingAppointment: {
    id: 'app.proHomePage.appointmentAbsenceForm.upcomingAppointment',
    defaultMessage: 'Upcoming Appointment',
  },
  cancelledAppointment: {
    id: 'app.proHomePage.appointmentAbsenceForm.cancelledAppointment',
    defaultMessage: 'Cancelled Appointment',
  },
  pastAppointment: {
    id: 'app.proHomePage.appointmentAbsenceForm.pastAppointment',
    defaultMessage: 'Past Appointment',
  },
  inquiryAppointment: {
    id: 'app.proHomePage.appointmentAbsenceForm.inquiryAppointment',
    defaultMessage: 'Inquiry',
  },
  absence: {
    id: 'app.proHomePage.appointmentAbsenceForm.absense',
    defaultMessage: 'Absence',
  },
});

const TAB_TYPES = {
  APPOINTMENT: 0,
  ABSENCE: 1,
};

function AppointmentAbsenceForm({ isOpen, onToggle, type }) {
  const [{ tab }, setState] = useSetState({
    tab: TAB_TYPES.APPOINTMENT,
  });

  function handleNewAppointmentClick() {
    setState({ tab: TAB_TYPES.APPOINTMENT });
  }

  function handleAbsenceClick() {
    setState({ tab: TAB_TYPES.ABSENCE });
  }

  return (
    <StyledModal
      isOpen={isOpen}
      toggle={onToggle}
      backdrop='static'
      centered
      size='lg'
    >
      <StyledModalBody>
        <Container>
          <TitleContainer>
            <CancelButton onClick={onToggle}>
              <FaTimes />
            </CancelButton>
            <Title
              onClick={handleNewAppointmentClick}
              selected={tab === TAB_TYPES.APPOINTMENT}
            >
              {(() => {
                switch (type) {
                  case CALENDAR_FORM_TYPES.INQUIRIES:
                    return intl.formatMessage(messages.inquiryAppointment);
                  case CALENDAR_FORM_TYPES.UPCOMING:
                    return intl.formatMessage(messages.upcomingAppointment);
                  case CALENDAR_FORM_TYPES.PAST:
                    return intl.formatMessage(messages.pastAppointment);
                  case CALENDAR_FORM_TYPES.CANCELLED:
                    return intl.formatMessage(messages.cancelledAppointment);
                  default:
                    return intl.formatMessage(messages.newAppointment);
                }
              })()}
            </Title>
            {type !== CALENDAR_FORM_TYPES.CANCELLED && (
              <>
                <TitleContainerSeparator />
                <Title
                  onClick={handleAbsenceClick}
                  selected={tab === TAB_TYPES.ABSENCE}
                >
                  {intl.formatMessage(messages.absence)}
                </Title>
              </>
            )}
          </TitleContainer>
          {(() => {
            return tab === TAB_TYPES.APPOINTMENT ? (
              <AppointmentForm type={type} />
            ) : (
              <AbsenceForm type={type} />
            );
          })()}
        </Container>
      </StyledModalBody>
    </StyledModal>
  );
}

AppointmentAbsenceForm.propTypes = {
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  type: PropTypes.string,
};

AppointmentAbsenceForm.defaultProps = {
  isOpen: false,
  onToggle: () => {},
  type: CALENDAR_FORM_TYPES.NEW,
};

export default AppointmentAbsenceForm;
