import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useSetState } from 'react-use';
import styled from 'styled-components';

import { APPOINTMENTS } from 'helpers/data';
import { APPOINTMENT_TYPES } from 'components/Shared/constants';
import Appointment from 'components/ProUserAppointments/components/Appointment';
import AppointmentInquiry from 'components/ProUserAppointments/components/AppointmentInquiry';
import DetailsPane from './components/DetailsPane';
import InquiryActions from './components/InquiryActions';
import UpcomingActions from './components/UpcomingActions';
import ExpiredActions from './components/ExpiredActions';

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
  const { id } = useParams();

  const [
    { appointment, isAppointmentLoading, isAppointmentNotFound },
    setState,
  ] = useSetState({
    appointment: null,
    isAppointmentLoading: false,
    isAppointmentNotFound: false,
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

  return (
    appointment && (
      <Container>
        <AppointmentContainer>
          <Title>
            {(() => {
              switch (appointment.type) {
                case APPOINTMENT_TYPES.INQUIRIES:
                  return 'Terminanfrage';
                case APPOINTMENT_TYPES.UPCOMING:
                  return 'Anstehender Termin';
                case APPOINTMENT_TYPES.CANCELLED:
                  return 'Abgesagter Termin';
                default:
                  return 'Vergangener Termin';
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
              {(() => {
                switch (appointment.type) {
                  case APPOINTMENT_TYPES.INQUIRIES: {
                    return <InquiryActions />;
                  }
                  case APPOINTMENT_TYPES.UPCOMING: {
                    return <UpcomingActions />;
                  }
                  default: {
                    return <ExpiredActions />;
                  }
                }
              })()}
            </Pane>
          </PaneContainer>
        </AppointmentContainer>
      </Container>
    )
  );
}

export default ProAppointment;
