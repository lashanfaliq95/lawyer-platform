import React, { useState } from 'react';
import { Container } from 'reactstrap';

import './styles.scss';
import Navbar from 'components/NavigationBar';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

const LoginPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  return (
    <>
      <Navbar />
      <Container fluid className="login-page">
        <Container fluid="md">
          <LoginForm
            isLoginVisible={isLoginVisible}
            collapseLogin={() => setIsLoginVisible(false)}
            expandLogin={() => setIsLoginVisible(true)}
          />
          <RegistrationForm isRegistrationVisible={!isLoginVisible} />
        </Container>
      </Container>
    </>
  );
};

export default LoginPage;
