import React from 'react';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';
import { useSetState } from 'react-use';

import intl from 'helpers/intlHelper';
import ProTopBar from 'components/Shared/ProTopBar';
import MainCalendar from './components/MainCalendar';
import MiniCalendar from './components/MiniCalendar';
import ViewOption from './components/ViewOption';
import AppointmentAbsenceForm from './components/AppointmentAbsenceForm';

const messages = defineMessages({
  newAppointment: {
    id: 'app.proHomePage.newAppointment',
    defaultMessage: 'New Appointment',
  },
});

const RootContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #fbfbfb;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 1rem;
  width: 100%;
`;

const LeftPane = styled.div`
  width: 100%;
  max-width: max-content;
`;

const RightPane = styled.div`
  flex: 1;
  display: flex;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  padding: 8px 20px;
`;

const Button = styled.button`
  border: 0.5px solid #d2d2d2;
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: transparent;
`;

function ProHomePage() {
  const [{ isNewAppointmentVisible }, setState] = useSetState({
    isNewAppointmentVisible: false,
  });

  function handleToggleNewAppointment() {
    setState({ isNewAppointmentVisible: !isNewAppointmentVisible });
  }

  return (
    <RootContainer>
      <ProTopBar showClientSearch />
      <Container>
        <LeftPane>
          <ButtonContainer>
            <Button onClick={handleToggleNewAppointment}>
              {intl.formatMessage(messages.newAppointment)}
            </Button>
          </ButtonContainer>
          <MiniCalendar />
          <ViewOption />
        </LeftPane>
        <RightPane>
          <MainCalendar />
        </RightPane>
        <AppointmentAbsenceForm
          isOpen={isNewAppointmentVisible}
          onToggle={handleToggleNewAppointment}
        />
      </Container>
    </RootContainer>
  );
}

export default ProHomePage;
