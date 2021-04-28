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
import { GENDERS, REGISTRATION_STEPS } from './constants';

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
  const [
    { step, [REGISTRATION_STEPS.PERSONAL_DATA]: personalData },
    setState,
  ] = useSetState({
    step: REGISTRATION_STEPS.PERSONAL_DATA,
    [REGISTRATION_STEPS.PERSONAL_DATA]: {
      firstName: '',
      lastName: '',
      email: '',
      telephoneNumber: '',
      gender: GENDERS.MALE,
    },
  });

  function handleStepChange(nextStep) {
    setState({ step: nextStep });
  }

  function handleOnStepSubmit(nextState) {
    setState({ ...nextState });
  }

  return (
    <Container>
      <TopBar />
      {(() => {
        let componentToRender;

        switch (step) {
          case REGISTRATION_STEPS.PERSONAL_DATA:
            componentToRender = (
              <PersonalData
                current={personalData}
                onStepChange={handleStepChange}
                onSubmit={handleOnStepSubmit}
              />
            );
            break;
          case REGISTRATION_STEPS.JOB_TITLE:
            componentToRender = (
              <JobTitle
                onStepChange={handleStepChange}
                onSubmit={handleOnStepSubmit}
              />
            );
            break;
          case REGISTRATION_STEPS.ADDRESS_ENTRY:
            componentToRender = (
              <AddressEntry
                onStepChange={handleStepChange}
                onSubmit={handleOnStepSubmit}
              />
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
