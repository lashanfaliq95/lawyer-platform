import React from 'react';
import { Container } from 'reactstrap';

import '../../styles.scss';
import Footer from 'components/Footer';
import RegisterCard from './RegisterCard';

const RegisterCardPage = () => (
  <Container fluid className="login-page">
    <RegisterCard />
    <Footer className="login-footer" hideInfoSection />
  </Container>
);

export default RegisterCardPage;
