import React from 'react';
import { Container } from 'reactstrap';

import '../../styles.scss';
import BottomFooter from 'components/Footer/components/BottomFooter';
import LoginCard from './LoginCard';

const LoginCardPage = () => (
  <Container fluid className="login-page">
    <LoginCard />
    <div className="login-footer">
      <BottomFooter />
    </div>
  </Container>
);

export default LoginCardPage;
