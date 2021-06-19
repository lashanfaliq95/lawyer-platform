import React from 'react';

import formatMessages from 'components/formatMessages';
import ProAccountContainer from 'components/Shared/ProAccountContainer';
import ChangePassword from './components/ChangePassword';
import InformationBox from './components/InformationBox';
import { Container, Title, Pan } from './styles';
import messages from './messages';

function SecuritySettingsPage() {
  return (
    <ProAccountContainer>
      <Title>{formatMessages(messages.title)}</Title>
      <Container>
        <Pan>
          <InformationBox />
          <ChangePassword />
        </Pan>
      </Container>
    </ProAccountContainer>
  );
}

export default SecuritySettingsPage;
