import React, { useState } from 'react';
import { connect } from 'react-redux';
import { shape, func } from 'prop-types';
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';

import formatMessages from 'components/formatMessages';
import NavigationBar from 'components/NavigationBar';
import UserAppointmentsList from './components/UserAppointmentsList';
import UserAppointmentDetailSection from './components/UserAppointmentDetailsSection';
import NoAppointmentsCard from './components/NoAppointmentsCard';

import messages from './messages';
import './styles.scss';
import {
  toggleCancellationModal,
  setActiveUserAppointment,
  setActivePastAppointment,
} from './action';

const AppointmentsPage = ({
  activeUserAppointment,
  activePastAppointment,
  userAppointments,
  pastAppointments,
  toggleCancellationModal: toggleCancellationModalAction,
  setActiveUserAppointment: setActiveUserAppointmentAction,
  setActivePastAppointment: setActivePastAppointmentAction,
}) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <NavigationBar />
      <Container className='appointments-page'>
        <div className='title'>{formatMessages(messages.appointments)}</div>
        <div className='content'>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1');
                }}
              >
                {formatMessages(messages.upComingAppointments)}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}
              >
                {formatMessages(messages.pastAppointments)}
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='1'>
              {userAppointments && userAppointments.length === 0 ? (
                <NoAppointmentsCard />
              ) : (
                <Row>
                  <Col md='6'>
                    <div className='list-title'>
                      {formatMessages(messages.appointmentOverview)}
                    </div>
                    <UserAppointmentsList
                      formatMessages={formatMessages}
                      userAppointments={userAppointments}
                      activeAppointment={activeUserAppointment}
                      setActiveAppointment={setActiveUserAppointmentAction}
                    />
                  </Col>
                  <Col md='6'>
                    <div className='list-title'>
                      {formatMessages(messages.details)}
                    </div>
                    <UserAppointmentDetailSection
                      formatMessages={formatMessages}
                      userAppointmentDetails={activeUserAppointment}
                      toggleCancellationModal={toggleCancellationModalAction}
                    />
                  </Col>
                </Row>
              )}
            </TabPane>
            <TabPane tabId='2'>
              {pastAppointments && pastAppointments.length === 0 ? (
                <NoAppointmentsCard />
              ) : (
                <Row>
                  <Col md='6'>
                    <div className='list-title'>
                      {formatMessages(messages.appointmentOverview)}
                    </div>
                    <UserAppointmentsList
                      formatMessages={formatMessages}
                      userAppointments={pastAppointments}
                      activeAppointment={activePastAppointment}
                      setActiveAppointment={setActivePastAppointmentAction}
                    />
                  </Col>
                  <Col md='6'>
                    <div className='list-title'>
                      {formatMessages(messages.details)}
                    </div>
                    <UserAppointmentDetailSection
                      formatMessages={formatMessages}
                      userAppointmentDetails={activePastAppointment}
                      toggleCancellationModal={toggleCancellationModalAction}
                      isPastAppointments
                    />
                  </Col>
                </Row>
              )}
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </>
  );
};

AppointmentsPage.propTypes = {
  activeUserAppointment: shape({}).isRequired,
  activePastAppointment: shape({}).isRequired,
  userAppointments: shape({}).isRequired,
  pastAppointments: shape({}).isRequired,
  toggleCancellationModal: func.isRequired,
  setActiveUserAppointment: func.isRequired,
  setActivePastAppointment: func.isRequired,
};

const mapStateToProps = (state) => ({
  userAppointments: state.appointments.userAppointments,
  activeUserAppointment: state.appointments.activeUserAppointment,
  activePastAppointment: state.appointments.activePastAppointment,
  pastAppointments: state.appointments.pastAppointments,
});

export default connect(mapStateToProps, {
  toggleCancellationModal,
  setActiveUserAppointment,
  setActivePastAppointment,
})(AppointmentsPage);
