import React from 'react';
import styled from 'styled-components';
import { AiOutlineFile } from 'react-icons/ai';

import ProgressBar from './ProgressBar';
import { PrimaryButton } from './Shared';

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
  margin-top: 0.5rem;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

function GetStarted() {
  return (
    <Container>
      <ProgressBar value={1} />
      <Title>Avoplan Pro macht einen Unterschied.</Title>
      <SubTitle>
        Eröffnen Sie jetzt Ihr Avoplan Pro Konto und erleben Sie den
        Unterscheid.
      </SubTitle>
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
        <StepsItemLabel>Daten angeben</StepsItemLabel>
        <StepsItemLabel>Schulung buchen</StepsItemLabel>
        <StepsItemLabel>Avoplan Pro erleben</StepsItemLabel>
      </LabelContainer>
      <FooterContainer>
        <PrimaryButton>Loslegen</PrimaryButton>
      </FooterContainer>
    </Container>
  );
}

export default GetStarted;
