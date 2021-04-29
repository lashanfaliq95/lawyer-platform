import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiOutlineFile } from 'react-icons/ai';
import { defineMessages } from 'react-intl';

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
  padding: 1rem 2rem;
  align-items: center;
  margin-top: 1rem;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const StepsSeparator = styled.div`
  flex: 1;
  border: ${(props) => `1px solid ${props.color}`};
`;

const StepsItem = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StepsItemLabel = styled.span`
  text-align: center;
`;

const StepsItemIconContainer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 1rem;
  height: 50px;
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
          <StepsItemIconContainer backgroundColor='#F3EDE0'>
            <AiOutlineFile />
          </StepsItemIconContainer>
        </StepsItem>
        <StepsSeparator color='#F3EDE0' />
        <StepsItem>
          <StepsItemIconContainer backgroundColor='#F2F4F6'>
            <AiOutlineFile />
          </StepsItemIconContainer>
        </StepsItem>
        <StepsSeparator color='#F2F4F6' />
        <StepsItem>
          <StepsItemIconContainer backgroundColor='#F4E8E8'>
            <AiOutlineFile />
          </StepsItemIconContainer>
        </StepsItem>
      </StepsContainer>
      <LabelContainer>
        <StepsItemLabel>{formatMessages(messages.enterData)}</StepsItemLabel>
        <StepsItemLabel>{formatMessages(messages.bookTutorial)}</StepsItemLabel>
        <StepsItemLabel>
          {formatMessages(messages.experienceAvoplanPro)}
        </StepsItemLabel>
      </LabelContainer>
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
