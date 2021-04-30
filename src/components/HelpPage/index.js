import React from 'react';
import { connect } from 'react-redux';

import formatMessages from 'components/formatMessages';
import NavigationBar from 'components/NavigationBar';
import messages from './messages';
import {
  HelpPageContainer, Content, Title, ListsContainer,
} from './styles';
import ListSection from './components/ListSection';

const leftList = [
  {
    description: messages.account,
    prefixIconName: 'user',
    suffixIconName: 'chevron-right',
    redirectUrl: '/',
  },
  {
    description: messages.searchAndBook,
    prefixIconName: 'search',
    suffixIconName: 'chevron-right',
    redirectUrl: '/search',
  },
  {
    description: messages.appointments,
    prefixIconName: 'calendar-check',
    suffixIconName: 'chevron-right',
    redirectUrl: '/appointments',
  },
  {
    description: messages.security,
    prefixIconName: 'user-shield',
    suffixIconName: 'chevron-right',
    redirectUrl: '/',
  },
];

const rightList = [
  {
    description: messages.contact,
    subDescription: messages.getSupport,
    prefixIconName: 'id-card-alt',
    suffixIconName: 'chevron-right',
    redirectUrl: '/help/contact',
  },
];

const HelpPage = () => (
  <>
    <NavigationBar />
    <HelpPageContainer fluid>
      <Content>
        <Title>{formatMessages(messages.title)}</Title>
        <ListsContainer>
          <ListSection title={messages.topics} list={leftList} />
          <ListSection title={messages.contact} list={rightList} />
        </ListsContainer>
      </Content>
    </HelpPageContainer>
  </>
);

HelpPage.propTypes = {

};

const mapStateToProps = (state) => (
  {
    userAppointments: state.appointments.userAppointments,
    activeUserAppointment: state.appointments.activeUserAppointment,
    activePastAppointment: state.appointments.activePastAppointment,
    activeUserColorIndex: state.appointments.activeUserColorIndex,
    activePastColorIndex: state.appointments.activePastColorIndex,
    pastAppointments: state.appointments.pastAppointments,
    id: state.login.userDetails && state.login.userDetails.id,
    isAppointmentsLoading: state.appointments.isAppointmentsLoading,
  }
);

export default connect(
  mapStateToProps, { },
)(HelpPage);
