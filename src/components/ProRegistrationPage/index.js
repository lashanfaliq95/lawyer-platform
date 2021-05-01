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
  Tutorial,
} from './components';
import { GENDERS, JOBS, REGISTRATION_STEPS } from './constants';

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
    {
      step,
      [REGISTRATION_STEPS.PERSONAL_DATA]: personalData,
      [REGISTRATION_STEPS.JOB_TITLE]: jobTitle,
      [REGISTRATION_STEPS.ADDRESS_ENTRY]: addressData,
      [REGISTRATION_STEPS.HOW_TO_USE]: howToUse,
    },
    setState,
  ] = useSetState({
    step: REGISTRATION_STEPS.GET_STARTED,
    [REGISTRATION_STEPS.PERSONAL_DATA]: {
      firstName: '',
      lastName: '',
      email: '',
      telephoneNumber: '',
      gender: GENDERS.MALE,
    },
    [REGISTRATION_STEPS.JOB_TITLE]: {
      jobTitle: JOBS.SPECIALIZED_LAWYER,
    },
    [REGISTRATION_STEPS.ADDRESS_ENTRY]: {
      road: '',
      houseNumber: '',
      postalCode: '',
      city: '',
    },
    [REGISTRATION_STEPS.HOW_TO_USE]: {
      tutorial: false,
    },
  });

  const { jobTitle: selectedJobTitle } = jobTitle;

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
                current={{ ...jobTitle, gender: personalData.gender }}
                onStepChange={handleStepChange}
                onSubmit={handleOnStepSubmit}
              />
            );
            break;
          case REGISTRATION_STEPS.ADDRESS_ENTRY:
            componentToRender = (
              <AddressEntry
                current={addressData}
                jobTitle={selectedJobTitle}
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
            componentToRender = (
              <HowToUse
                onStepChange={handleStepChange}
                onSubmit={handleOnStepSubmit}
              />
            );
            break;
          case REGISTRATION_STEPS.TUTORIAL:
            componentToRender = <Tutorial onStepChange={handleStepChange} />;
            break;
          case REGISTRATION_STEPS.CONFIRMATION:
            componentToRender = (
              <Confirmation
                current={howToUse}
                onStepChange={handleStepChange}
              />
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
