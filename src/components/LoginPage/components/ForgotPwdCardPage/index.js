import React from 'react';
import { Container } from 'reactstrap';

import '../../styles.scss';
import Footer from 'components/Footer';
import ForgotPwdCard from './ForgotPwdCard';

const ForgotPwdCardPage = () => (
  <Container fluid className="login-page">
    <ForgotPwdCard />
    <Footer className="login-footer" hideInfoSection />
  </Container>
);

export default ForgotPwdCardPage;
