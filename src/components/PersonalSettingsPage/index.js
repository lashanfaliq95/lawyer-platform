import React from 'react';
import styled from 'styled-components';

import formatMessages from 'components/formatMessages';
import ProAccountContainer from 'components/Shared/ProAccountContainer';
import InformationBox from './components/InformationBox';
import ContactInformation from './components/ContactInformation';
import FurtherInformation from './components/FurtherInformation';
import Setting from './components/Setting';
import messages from './messages';
import { Title, Pan } from './styles';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const USER = {
  firstName: 'Vincenzo',
  lastName: 'Cassano',
  email: 'vincenzo@test.com',
  mobileNumber: '+94123456789',
  gender: 'male',
  jobTitle: 'specialize_lawyer',
};

function PersonalSettingsPage() {
  return (
    <ProAccountContainer>
      <Title>{formatMessages(messages.title)}</Title>
      <Container>
        <Pan>
          <InformationBox />
          <ContactInformation
            firstName={USER.firstName}
            lastName={USER.lastName}
            email={USER.email}
            mobileNumber={USER.mobileNumber}
          />
        </Pan>
        <Pan>
          <FurtherInformation gender={USER.gender} jobTitle={USER.jobTitle} />
          <Setting />
        </Pan>
      </Container>
    </ProAccountContainer>
  );
}

export default PersonalSettingsPage;
