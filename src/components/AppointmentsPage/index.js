import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Card,
  Button,
  CardTitle,
  CardText,
  Col,
} from 'reactstrap';
import classnames from 'classnames';

import formatMessages from 'components/formatMessages';
import NavigationBar from 'components/NavigationBar';
import messages from './messages';

import './styles.scss';

const AppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <NavigationBar />
      <Container className="appointments-page">
        <div className="title">{formatMessages(messages.appointments)}</div>
        <div className="content">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                {formatMessages(messages.upComingAppointments)}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                {formatMessages(messages.pastAppointments)}
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col md="5">
                  <Card body className="no-appointments-card">
                    <CardTitle>{formatMessages(messages.getSupport)}</CardTitle>
                    <CardText>{formatMessages(messages.findSuitableExpertTxt)}</CardText>
                    <div className="no-appointment-card-btn">
                      <Button color="primary">
                        <Link to="/">
                          {formatMessages(messages.findSuitableExpertBtn)}
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row />
            </TabPane>
          </TabContent>

        </div>
      </Container>
    </>
  );
};

AppointmentsPage.propTypes = {
};

export default AppointmentsPage;
