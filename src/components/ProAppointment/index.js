import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useSetState } from 'react-use';
import styled from 'styled-components';
import { defineMessages, useIntl } from 'react-intl';

import { APPOINTMENTS } from 'helpers/data';
import { APPOINTMENT_TYPES } from 'components/Shared/constants';
import Appointment from 'components/ProUserAppointments/components/Appointment';
import AppointmentInquiry from 'components/ProUserAppointments/components/AppointmentInquiry';
import DetailsPane from './components/DetailsPane';
import AppointmentActions from './components/AppointmentActions';
import AppointmentReschedule from './components/AppointmentReschedule';
import AppointmentCancel from './components/AppointmentCancel';

const messages = defineMessages({
  inquiry: {
    id: 'app.proAppointment.inquiry',
    defaultMessage: 'Inquiry',
  },
  upcoming: {
    id: 'app.proAppointment.upcoming',
    defaultMessage: 'Upcoming Appointment',
  },
  cancelled: {
    id: 'app.proAppointment.cancelled',
    defaultMessage: 'Cancelled Appointment',
  },
  past: {
    id: 'app.proAppointment.past',
    defaultMessage: 'Past Appointment',
  },
});

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #fbfbfb;
  padding: 2.5rem 0rem;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const LoadingContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: 'Montserrat', arial, sans-serif;
  font-weight: 500;
`;

const AppointmentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 1rem 0rem;
`;

const PaneContainer = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: 1;
`;

const Separator = styled.div`
  width: 20px;
`;

const HeaderContainer = styled.div`
  border: 1px solid #d2d2d2;
  border-bottom: none;
  border-radius: 10px;
  overflow: hidden;
`;

function ProAppointment() {
  const intl = useIntl();
  const { id } = useParams();

  const [
    {
      appointment,
      isAppointmentLoading,
      isAppointmentNotFound,
      isRescheduleVisible,
      isCancelVisible,
    },
    setState,
  ] = useSetState({
    appointment: null,
    isAppointmentLoading: false,
    isAppointmentNotFound: false,
    isRescheduleVisible: false,
    isCancelVisible: false,
  });

  useEffect(() => {
    const foundAppointment = APPOINTMENTS.find(
      ({ id: appointmentId }) => appointmentId.toString() === id,
    );

    if (!foundAppointment) {
      setState({ isAppointmentNotFound: true, isAppointmentLoading: false });
      return;
    }

    setState({ appointment: foundAppointment, isAppointmentLoading: false });
    //  eslint-disable-next-line
  }, []);

  if (isAppointmentLoading) {
    return <LoadingContainer>Loading</LoadingContainer>;
  }
  if (isAppointmentNotFound) {
    return <Redirect to='/404-not-found' />;
  }

  function handleOnSendMessage() {
    //  TODO: Replace email with user email
    const email = 'shaahid.xd@gmail.com';
    window.location = `mailto:${email}`;
  }

  //  TODO: Handle appointment action
  function handleOnConfirmInquiry() {
    setState({
      appointment: { ...appointment, type: APPOINTMENT_TYPES.UPCOMING },
    });
  }

  function handleOnRescheduleAppointment() {
    setState({
      isRescheduleVisible: true,
    });
  }

  function handleOnRescheduleToggle() {
    setState({
      isRescheduleVisible: !isRescheduleVisible,
    });
  }

  function handleOnCancelAppointment() {
    setState({
      isCancelVisible: true,
    });
  }

  function handleOnCancelToggle() {
    setState({
      isCancelVisible: !isCancelVisible,
    });
  }

  return (
    appointment && (
      <Container>
        <AppointmentContainer>
          <Title>
            {(() => {
              switch (appointment.type) {
                case APPOINTMENT_TYPES.INQUIRIES:
                  return intl.formatMessage(messages.inquiry);
                case APPOINTMENT_TYPES.UPCOMING:
                  return intl.formatMessage(messages.upcoming);
                case APPOINTMENT_TYPES.CANCELLED:
                  return intl.formatMessage(messages.cancelled);
                default:
                  return intl.formatMessage(messages.past);
              }
            })()}
          </Title>
          {(() => {
            switch (appointment.type) {
              case APPOINTMENT_TYPES.INQUIRIES:
                return <AppointmentInquiry inquiry={appointment} />;
              default:
                return (
                  <HeaderContainer>
                    <Appointment appointment={appointment} index={1} />
                  </HeaderContainer>
                );
            }
          })()}
          <PaneContainer>
            <Pane>
              <DetailsPane appointment={appointment} />
            </Pane>
            <Separator />
            <Pane>
              <AppointmentActions
                type={appointment.type}
                onCancelAppointment={handleOnCancelAppointment}
                onConfirmInquiry={handleOnConfirmInquiry}
                onDenyInquiry={handleOnCancelAppointment}
                onRescheduleAppointment={handleOnRescheduleAppointment}
                onSendMessage={handleOnSendMessage}
              />
            </Pane>
          </PaneContainer>
        </AppointmentContainer>
        {appointment.type === APPOINTMENT_TYPES.UPCOMING && (
          <AppointmentReschedule
            isOpen={isRescheduleVisible}
            onToggle={handleOnRescheduleToggle}
            currentSelectedTimeSlot={appointment.date}
          />
        )}
        {(appointment.type === APPOINTMENT_TYPES.UPCOMING ||
          appointment.type === APPOINTMENT_TYPES.INQUIRIES) && (
          <AppointmentCancel
            appointment={appointment}
            isOpen={isCancelVisible}
            onToggle={handleOnCancelToggle}
          />
        )}
      </Container>
    )
  );
}

export default ProAppointment;
