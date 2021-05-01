import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';

import formatMessages from 'components/formatMessages';
import ProgressBar from './ProgressBar';
import FooterContainer from './FooterContainer';
import { REGISTRATION_STEPS } from '../constants';

const messages = defineMessages({
  title: {
    id: 'app.proRegisterPage.tutorial.title',
    defaultMessage: 'Book a Tutorial',
  },
  subTitle: {
    id: 'app.proRegisterPage.tutorial.subTitle',
    defaultMessage:
      'Please select a date and a timeslot for the free tutorial.',
  },
  description: {
    id: 'app.proRegisterPage.tutorial.description',
    defaultMessage: 'It is best to plan an hour for the tutorial.',
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

function Tutorial({ onStepChange }) {
  function handleOnPreviousClick() {
    onStepChange(REGISTRATION_STEPS.HOW_TO_USE);
  }

  function handleOnNextClick() {
    onStepChange(REGISTRATION_STEPS.CONFIRMATION);
  }

  return (
    <Container>
      <ProgressBar value={7} />
      <Title>{formatMessages(messages.title)}</Title>
      <SubTitle>{formatMessages(messages.subTitle)}</SubTitle>
      <Description>{formatMessages(messages.description)}</Description>
      {/* TODO: Implement calendar here */}
      <FooterContainer
        onPrevious={handleOnPreviousClick}
        onNext={handleOnNextClick}
        nextDisabled={false}
      />
    </Container>
  );
}

Tutorial.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default Tutorial;
