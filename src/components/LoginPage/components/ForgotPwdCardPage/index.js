import React from 'react';
import { Container } from 'reactstrap';

import '../../styles.scss';
import BottomFooter from 'components/Footer/components/BottomFooter';
import ForgotPwdCard from './ForgotPwdCard';

const ForgotPwdCardPage = () => (
  <Container fluid className="login-page">
    <ForgotPwdCard />
    <div className="login-footer">
      <BottomFooter />
    </div>
  </Container>
);

export default ForgotPwdCardPage;
