import React from 'react';
import styled from 'styled-components';

import GetStarted from './components/GetStarted';
import TopBar from './components/TopBar';
import RegistrationRoot from './containers/RegistrationRoot';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

function ProRegistrationPage() {
  return (
    <Container>
      <TopBar />
      <RegistrationRoot>
        <GetStarted />
      </RegistrationRoot>
    </Container>
  );
}

export default ProRegistrationPage;
