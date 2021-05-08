import React from 'react';

import NavigationBar from 'components/NavigationBar';
import formatMessages from 'components/formatMessages';

import InfoSection from './components/InfoSection';
import PasswordSection from './components/PasswordSection';
import ContactSection from './components/ContactSection';
import AdminCard from './components/AdminCard';

import messages from './messages';
import { MyAccountPageContainer, Row, Title, LogoutIcon } from './styles';

const MyAccountPage = () => (
  <>
    <NavigationBar />
    <MyAccountPageContainer fluid>
      <Row
        style={{
          marginBottom: '30px',
          marginTop: '10px',
          justifyContent: 'space-around',
        }}
      >
        <Title>{formatMessages(messages.title)}</Title>
        <LogoutIcon name='door-open' size='md' />
      </Row>
      <Row style={{ marginBottom: '50px' }}>
        <InfoSection />
        <PasswordSection />
      </Row>
      <Row>
        <ContactSection />
        <AdminCard />
      </Row>
    </MyAccountPageContainer>
  </>
);

export default MyAccountPage;
