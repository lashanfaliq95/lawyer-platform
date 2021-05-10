import React from 'react';
import { useDispatch } from 'react-redux';

import NavigationBar from 'components/NavigationBar';
import formatMessages from 'components/formatMessages';

import { logoutUser } from 'components/LoginPage/actions';
import InfoSection from './components/InfoSection';
import PasswordSection from './components/PasswordSection';
import ContactSection from './components/ContactSection';
import AdminCard from './components/AdminCard';

import messages from './messages';
import { MyAccountPageContainer, Row, Title, LogoutIcon } from './styles';

const MyAccountPage = () => {
  const dispatch = useDispatch();

  return (
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
          <LogoutIcon
            name='sign-out-alt'
            size='large'
            color='darkslategrey'
            onClick={() => dispatch(logoutUser())}
          />
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
};

export default MyAccountPage;
