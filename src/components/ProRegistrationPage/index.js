import React from 'react';
import styled from 'styled-components';
import { useSetState } from 'react-use';

import {
  GetStarted,
  PersonalData,
  JobTitle,
  AddressEntry,
  PasswordSetting,
  AccountConfirmed,
  AccountPending,
  Confirmation,
  HowToUse,
  RegistrationRoot,
  TopBar,
} from './components';
import { REGISTRATION_STEPS } from './constants';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

function ProRegistrationPage() {
  const [{ step }, setState] = useSetState({
    step: REGISTRATION_STEPS.GET_STARTED,
  });

  function handleStepChange(nextStep) {
    setState({ step: nextStep });
  }

  return (
    <Container>
      <TopBar />
      {(() => {
        let componentToRender;

        switch (step) {
          case REGISTRATION_STEPS.PERSONAL_DATA:
            componentToRender = (
              <PersonalData onStepChange={handleStepChange} />
            );
            break;
          case REGISTRATION_STEPS.JOB_TITLE:
            componentToRender = <JobTitle onStepChange={handleStepChange} />;
            break;
          case REGISTRATION_STEPS.ADDRESS_ENTRY:
            componentToRender = (
              <AddressEntry onStepChange={handleStepChange} />
            );
            break;
          case REGISTRATION_STEPS.PASSWORD_SETTING:
            componentToRender = (
              <PasswordSetting onStepChange={handleStepChange} />
            );
            break;
          case REGISTRATION_STEPS.HOW_TO_USE:
            componentToRender = <HowToUse onStepChange={handleStepChange} />;
            break;
          case REGISTRATION_STEPS.CONFIRMATION:
            componentToRender = (
              <Confirmation onStepChange={handleStepChange} />
            );
            break;
          case REGISTRATION_STEPS.ACCOUNT_PENDING:
            componentToRender = (
              <AccountPending onStepChange={handleStepChange} />
            );
            break;
          case REGISTRATION_STEPS.ACCOUNT_CONFIRMED:
            componentToRender = (
              <AccountConfirmed onStepChange={handleStepChange} />
            );
            break;
          default:
            componentToRender = <GetStarted onStepChange={handleStepChange} />;
        }
        return <RegistrationRoot>{componentToRender}</RegistrationRoot>;
      })()}
    </Container>
  );
}

export default ProRegistrationPage;
