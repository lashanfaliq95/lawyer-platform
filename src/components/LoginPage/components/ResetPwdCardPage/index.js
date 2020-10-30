import React, { useEffect } from 'react';
import { Container } from 'reactstrap';

import '../../styles.scss';
import Footer from 'components/Footer';
import ResetCartPage from './ResetPwdCard';

const ResetPwdCardPage = () => {
  useEffect(() => {
    // getResetToken();
  }, []);

  return (
    <Container fluid className="login-page">
      <ResetCartPage />
      <Footer className="login-footer" hideInfoSection />
    </Container>
  );
};

export default ResetPwdCardPage;
