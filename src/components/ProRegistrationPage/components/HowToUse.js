import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';
import { IoStorefrontOutline } from 'react-icons/io5';
import { FaRegCalendar, FaRegFolderOpen } from 'react-icons/fa';

import formatMessages from 'components/formatMessages';
import { PrimaryButton, SecondaryButton } from 'components/Shared/Buttons';
import ProgressBar from './ProgressBar';
import FooterContainer from './FooterContainer';
import { REGISTRATION_STEPS } from '../constants';

const messages = defineMessages({
  title: {
    id: 'app.proRegisterPage.howToUse.title',
    defaultMessage: 'Tutorial',
  },
  subTitle: {
    id: 'app.proRegisterPage.howToUse.subTitle',
    defaultMessage:
      'Do you want to have a tutorial appointment to know how to use avoplan pro?',
  },
  description: {
    id: 'app.proRegisterPage.howToUse.description',
    defaultMessage: 'What the appointment will include',
  },
  firstStep: {
    id: 'app.proRegisterPage.howToUse.firstStep',
    defaultMessage: 'Create your avoplan profile',
  },
  secondStep: {
    id: 'app.proRegisterPage.howToUse.secondStep',
    defaultMessage: 'Adjust your calendar',
  },
  thirdStep: {
    id: 'app.proRegisterPage.howToUse.thirdStep',
    defaultMessage: 'Your Google My Business entry',
  },
  bookAppointment: {
    id: 'app.proRegisterPage.howToUse.bookAppointment',
    defaultMessage: 'Book appointment',
  },
  back: {
    id: 'app.proRegisterPage.howToUse.back',
    defaultMessage: 'Not now',
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

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const StepItem = styled.div`
  display: flex;
`;

const StepIcon = styled.div`
  width: 80px;
  height: ${({ separator }) => (separator ? '40px' : '80px')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ background }) => background || 'transparent'};
  border-radius: ${({ separator }) => (separator ? '0' : '5rem')};
`;

const StepSeparator = styled.div`
  flex: 1;
  border: 1px solid ${({ color }) => color};
`;

const StepDescription = styled.div`
  font-size: 15px;
  font-weight: 500;
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Separator = styled.div`
  width: 10px;
`;

function HowToUse({ onStepChange, onSubmit }) {
  function handlePrevious() {
    onStepChange(REGISTRATION_STEPS.PASSWORD_SETTING);
  }

  function handleNextShowTutorial() {
    onSubmit({
      [REGISTRATION_STEPS.HOW_TO_USE]: {
        tutorial: true,
      },
      step: REGISTRATION_STEPS.TUTORIAL,
    });
  }

  function handleNextSkipTutorial() {
    onSubmit({
      [REGISTRATION_STEPS.HOW_TO_USE]: {
        tutorial: false,
      },
      [REGISTRATION_STEPS.TUTORIAL]: {
        selectedDateTime: null,
      },
      step: REGISTRATION_STEPS.CONFIRMATION,
    });
  }

  return (
    <Container>
      <ProgressBar value={6} />
      <Title>{formatMessages(messages.title)}</Title>
      <SubTitle>{formatMessages(messages.subTitle)}</SubTitle>
      <Description>{formatMessages(messages.description)}</Description>
      <StepsContainer>
        <StepItem>
          <StepIcon background='#F3EDE0'>
            <FaRegFolderOpen size={30} />
          </StepIcon>
          <StepDescription>
            {formatMessages(messages.firstStep)}
          </StepDescription>
        </StepItem>
        <StepItem>
          <StepIcon separator>
            <StepSeparator color='#F3EDE0' />
          </StepIcon>
        </StepItem>
        <StepItem>
          <StepIcon background='#F2F4F6'>
            <FaRegCalendar size={30} />
          </StepIcon>
          <StepDescription>
            {formatMessages(messages.secondStep)}
          </StepDescription>
        </StepItem>
        <StepItem>
          <StepIcon separator>
            <StepSeparator color='#F2F4F6' />
          </StepIcon>
        </StepItem>
        <StepItem>
          <StepIcon background='#F4E8E8'>
            <IoStorefrontOutline size={30} />
          </StepIcon>
          <StepDescription>
            {formatMessages(messages.thirdStep)}
          </StepDescription>
        </StepItem>
      </StepsContainer>
      <OptionsContainer>
        <SecondaryButton hasBorder onClick={handleNextSkipTutorial}>
          {formatMessages(messages.back)}
        </SecondaryButton>
        <Separator />
        <PrimaryButton onClick={handleNextShowTutorial}>
          {formatMessages(messages.bookAppointment)}
        </PrimaryButton>
      </OptionsContainer>
      <FooterContainer onPrevious={handlePrevious} hideNext />
    </Container>
  );
}

HowToUse.propTypes = {
  onStepChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default HowToUse;
