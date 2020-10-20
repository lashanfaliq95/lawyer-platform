import React from 'react';
import { Container } from 'reactstrap';

import '../../styles.scss';
import Footer from 'components/Footer';
import LoginCard from './LoginCard';

const LoginCardPage = () => (
  <Container fluid className="login-page">
    <LoginCard />
    <Footer className="login-footer" hideInfoSection />
  </Container>
);

export default LoginCardPage;
