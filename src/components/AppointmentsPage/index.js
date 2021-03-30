import React from 'react';
import { Container } from 'reactstrap';

import formatMessages from 'components/formatMessages';
import NavigationBar from 'components/NavigationBar';
import messages from './messages';

import './styles.scss';

const AppointmentsPage = () => (
  <>
    <NavigationBar />
    <Container className="appointments-page">
      <div className="title">{formatMessages(messages.appointments)}</div>
      <div className="content" />
    </Container>
  </>
);

AppointmentsPage.propTypes = {
};

export default AppointmentsPage;
