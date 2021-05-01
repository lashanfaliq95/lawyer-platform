import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';
import {
  FaRegCalendar,
  FaRegFolderOpen,
  FaRegCreditCard,
} from 'react-icons/fa';

import formatMessages from 'components/formatMessages';
import ProgressBar from './ProgressBar';
import { PrimaryButton } from './Shared';
import { REGISTRATION_STEPS } from '../constants';

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
`;

const StepsContainer = styled.div`
  display: flex;
  padding: 1rem 0rem;
  align-items: center;
  margin-top: 1rem;
`;

const StepsSeparator = styled.div`
  flex: 1;
  border: ${({ color }) => `1px solid ${color || 'transparent'}`};
`;

const StepsUpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const StepsItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1rem 0rem;
`;

const StepsItemLabel = styled.span`
  text-align: center;
  max-width: 100%;
  font-size: 14px;
`;

const StepsItemIconContainer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 1rem;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
`;

const messages = defineMessages({
  title: {
    id: 'app.proRegisterPage.getStartedTitle',
    defaultMessage: 'Avoplan Pro makes a difference.',
  },
  subtitle: {
    id: 'app.proRegisterPage.getStartedSubtitle',
    defaultMessage:
      'Open your Avoplan Pro account now and experience the difference.',
  },
  enterData: {
    id: 'app.proRegisterPage.getStartedEnterData',
    defaultMessage: 'Enter data',
  },
  bookTutorial: {
    id: 'app.proRegisterPage.getStartedBookTutorial',
    defaultMessage: 'Book a tutorial',
  },
  experienceAvoplanPro: {
    id: 'app.proRegisterPage.getStartedExperienceAvoplanPro',
    defaultMessage: 'Experience Avoplan Pro',
  },
  btnGetStarted: {
    id: 'app.proRegisterPage.getStartedBtnGetStarted',
    defaultMessage: 'Get Started',
  },
});

function GetStarted({ onStepChange }) {
  function handleOnNextClick() {
    onStepChange(REGISTRATION_STEPS.PERSONAL_DATA);
  }

  return (
    <Container>
      <ProgressBar value={1} />
      <Title>{formatMessages(messages.title)}</Title>
      <SubTitle>{formatMessages(messages.subtitle)}</SubTitle>
      <StepsContainer>
        <StepsItem>
          <StepsUpperContainer>
            <StepsSeparator />
            <StepsItemIconContainer backgroundColor='#F3EDE0'>
              <FaRegFolderOpen size={30} />
            </StepsItemIconContainer>
            <StepsSeparator color='#F3EDE0' />
          </StepsUpperContainer>
          <StepsItemLabel>{formatMessages(messages.enterData)}</StepsItemLabel>
        </StepsItem>
        <StepsItem>
          <StepsUpperContainer>
            <StepsSeparator color='#F3EDE0' />
            <StepsItemIconContainer backgroundColor='#F2F4F6'>
              <FaRegCreditCard size={30} />
            </StepsItemIconContainer>
            <StepsSeparator color='#F2F4F6' />
          </StepsUpperContainer>
          <StepsItemLabel>
            {formatMessages(messages.bookTutorial)}
          </StepsItemLabel>
        </StepsItem>
        <StepsItem>
          <StepsUpperContainer>
            <StepsSeparator color='#F2F4F6' />
            <StepsItemIconContainer backgroundColor='#F4E8E8'>
              <FaRegCalendar size={30} />
            </StepsItemIconContainer>
            <StepsSeparator />
          </StepsUpperContainer>
          <StepsItemLabel>
            {formatMessages(messages.experienceAvoplanPro)}
          </StepsItemLabel>
        </StepsItem>
      </StepsContainer>
      <FooterContainer>
        <PrimaryButton onClick={handleOnNextClick}>
          {formatMessages(messages.btnGetStarted)}
        </PrimaryButton>
      </FooterContainer>
    </Container>
  );
}

GetStarted.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default GetStarted;
