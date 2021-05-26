import React from 'react';
import { Container } from 'reactstrap';

import '../../styles.scss';
import BottomFooter from 'components/Footer/components/BottomFooter';
import RegisterCard from './RegisterCard';

const RegisterCardPage = () => (
  <Container fluid className='login-page'>
    <RegisterCard />
    <div className='login-footer'>
      <BottomFooter />
    </div>
  </Container>
);

export default RegisterCardPage;
