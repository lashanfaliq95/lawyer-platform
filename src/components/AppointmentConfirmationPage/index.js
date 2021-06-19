import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';

import UserAppointmentDetailSection from 'components/AppointmentsPage/components/UserAppointmentDetailsSection';
import formatMessages from 'components/formatMessages';
import ButtonContainer from './components/ButtonContainer';

import {
  ConfirmationPageContainer,
  ConfirmationPage,
  Title,
  SubTitle,
  HeaderRow,
} from './styles';
import messages from './messages';

const AppointmentConfirmationPage = () => {
  const currentAppointment = useSelector(
    (state) => state.appointments.currentAppointment,
  );

  if (!currentAppointment) {
    return <Redirect to='/search' />;
  }

  return (
    <ConfirmationPage>
      <ConfirmationPageContainer>
        <HeaderRow>
          <Title>{formatMessages(messages.title)}</Title>
          <SubTitle>{formatMessages(messages.subTitle)}</SubTitle>
        </HeaderRow>
        <Row>
          <Col md='8'>
            <ButtonContainer
              title={messages.newToAvoplan}
              btnText={messages.register}
              btnColor='#65a765'
              linkTo='/auth/register'
            />
            <ButtonContainer
              title={messages.alreadyOnAvoplan}
              btnText={messages.login}
              btnColor='#105fbb'
              linkTo='/auth/login'
            />
          </Col>
          <Col md='4'>
            <UserAppointmentDetailSection
              formatMessages={formatMessages}
              userAppointmentDetails={currentAppointment}
              isAppointmentSummary
            />
          </Col>
        </Row>
      </ConfirmationPageContainer>
    </ConfirmationPage>
  );
};

export default AppointmentConfirmationPage;
