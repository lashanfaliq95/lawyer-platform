import React from 'react';
import styled from 'styled-components';
import { useSetState } from 'react-use';

import { JOBS } from 'components/Shared/constants';
import {
  GetStarted,
  PersonalData,
  JobTitle,
  AddressEntry,
  PasswordSetting,
  AccountPending,
  Confirmation,
  HowToUse,
  RegistrationRoot,
  TopBar,
  Tutorial,
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
    {
      step,
      [REGISTRATION_STEPS.PERSONAL_DATA]: personalData,
      [REGISTRATION_STEPS.JOB_TITLE]: jobTitle,
      [REGISTRATION_STEPS.ADDRESS_ENTRY]: addressData,
      [REGISTRATION_STEPS.PASSWORD_SETTING]: passwordSetting,
      [REGISTRATION_STEPS.HOW_TO_USE]: howToUse,
      [REGISTRATION_STEPS.TUTORIAL]: tutorial,
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
      zipCode: '',
      city: '',
    },
    [REGISTRATION_STEPS.PASSWORD_SETTING]: {
      password: '',
    },
    [REGISTRATION_STEPS.HOW_TO_USE]: {
      tutorial: false,
    },
    [REGISTRATION_STEPS.TUTORIAL]: {
      selectedDateTime: null,
    },
  });

  const { jobTitle: selectedJobTitle } = jobTitle;
  const { email } = personalData;

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
              <PasswordSetting
                current={passwordSetting}
                onStepChange={handleStepChange}
                onSubmit={handleOnStepSubmit}
              />
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
            componentToRender = (
              <Tutorial
                current={tutorial}
                onStepChange={handleStepChange}
                onSubmit={handleOnStepSubmit}
              />
            );
            break;
          case REGISTRATION_STEPS.CONFIRMATION:
            componentToRender = (
              <Confirmation
                current={howToUse}
                onStepChange={handleStepChange}
                data={{
                  ...personalData,
                  ...jobTitle,
                  ...addressData,
                  ...passwordSetting,
                  ...howToUse,
                  ...tutorial,
                }}
              />
            );
            break;
          case REGISTRATION_STEPS.ACCOUNT_PENDING:
            componentToRender = <AccountPending email={email} />;
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
