import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';
import formatMessages from 'components/formatMessages';

import { CheckBoxLabel } from 'components/Shared/CheckBox/CheckBox';
import ProgressBar from './ProgressBar';
import FooterContainer from './FooterContainer';
import { REGISTRATION_STEPS } from '../constants';

const messages = defineMessages({
  title: {
    id: 'app.proRegisterPage.confirmation.title',
    defaultMessage: 'Open an Account',
  },
  subTitle: {
    id: 'app.proRegisterPage.confirmation.subTitle',
    defaultMessage:
      'Please agree to the terms and conditions to open your Avoplan Pro account.',
  },
  description: {
    id: 'app.proRegisterPage.confirmation.description',
    defaultMessage:
      "Don't worry, the first two months are free and only extended if you want.",
  },
  generalTerms: {
    id: 'app.proRegisterPage.confirmation.generalTerms',
    defaultMessage: 'General Terms',
  },
  generalTermsDescription: {
    id: 'app.proRegisterPage.confirmation.generalTermsDescription',
    defaultMessage: 'I have read and I accept the general terms',
  },
  updates: {
    id: 'app.proRegisterPage.confirmation.updates',
    defaultMessage: 'Updates (optional)',
  },
  updatesDescription: {
    id: 'app.proRegisterPage.confirmation.updatesDescription',
    defaultMessage:
      'I would like to be informed about new products of avoplan.',
  },
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fbfbfb;
  padding: 2rem;
`;

const Title = styled.span`
  font-size: 2rem;
  margin-top: 1rem;
`;

const SubTitle = styled.span`
  margin-top: 0.5rem;
  display: block;
  font-size: 20px;
`;

const Description = styled.span`
  font-size: 15px;
  margin-top: 0.5rem;
`;

const CheckBoxDescription = styled.span`
  font-size: 13px;
  margin-top: 0.5rem;
  color: #585959;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

function Confirmation({ current, onStepChange }) {
  const [generalTermsChecked, setGeneralTermsChecked] = useState(false);
  const [updatesChecked, setUpdatesChecked] = useState(false);

  const { tutorial } = current;

  function handleOnNext() {
    //  TODO: API integration
    onStepChange(REGISTRATION_STEPS.ACCOUNT_PENDING);
  }

  function handleOnPrevious() {
    let nextStep;

    if (tutorial) {
      nextStep = REGISTRATION_STEPS.TUTORIAL;
    } else {
      nextStep = REGISTRATION_STEPS.HOW_TO_USE;
    }
    onStepChange(nextStep);
  }

  return (
    <Container>
      <ProgressBar value={8} />
      <Title>{formatMessages(messages.title)}</Title>
      <SubTitle>{formatMessages(messages.subTitle)}</SubTitle>
      <Description>{formatMessages(messages.description)}</Description>
      <CheckBoxContainer>
        <CheckBoxLabel
          checked={generalTermsChecked}
          onToggle={setGeneralTermsChecked}
          label={formatMessages(messages.generalTerms)}
        />
        <CheckBoxDescription>
          {formatMessages(messages.generalTermsDescription)}
        </CheckBoxDescription>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <CheckBoxLabel
          checked={updatesChecked}
          onToggle={setUpdatesChecked}
          label={formatMessages(messages.updates)}
        />
        <CheckBoxDescription>
          {formatMessages(messages.updatesDescription)}
        </CheckBoxDescription>
      </CheckBoxContainer>
      <FooterContainer
        onPrevious={handleOnPrevious}
        onNext={handleOnNext}
        nextDisabled={!generalTermsChecked}
        nextLabel={formatMessages(messages.title)}
      />
    </Container>
  );
}

Confirmation.propTypes = {
  current: PropTypes.shape({
    tutorial: PropTypes.bool,
  }).isRequired,
  onStepChange: PropTypes.func.isRequired,
};

export default Confirmation;
