import React from 'react';

import formatMessages from 'components/formatMessages';

import {
  ConfirmationPageContainer,
  ConfirmationPage,
  Title,
  SubTitle,
  HeaderRow,
  Btn,
} from 'components/AppointmentConfirmationPage/styles';

import messages from 'components/AppointmentConfirmationPage/messages';

const AppointmentConfirmationPage = () => {
  return (
    <ConfirmationPage>
      <ConfirmationPageContainer style={{ textAlign: 'center' }}>
        <HeaderRow>
          <Title>{formatMessages(messages.appointmentBooked)}</Title>
          <SubTitle>{formatMessages(messages.sentConfirmationEmail)}</SubTitle>
          <SubTitle>{formatMessages(messages.remindAppointment)}</SubTitle>
          <Btn color='#105fbb' style={{ width: '60%', marginLeft: '20%' }}>
            {formatMessages(messages.addToCalender)}
          </Btn>
        </HeaderRow>
      </ConfirmationPageContainer>
    </ConfirmationPage>
  );
};

export default AppointmentConfirmationPage;
