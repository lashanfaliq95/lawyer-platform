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
`;

const Title = styled.span``;

const SubTitle = styled.span``;

const StepsContainer = styled.div`
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
`;

const StepsSeparator = styled.div`
  flex: 1;
  border: 1px solid red;
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
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
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
          <StepsItemIconContainer backgroundColor={'red'}>
            <AiOutlineFile />
          </StepsItemIconContainer>
          <StepsItemLabel>Hehe</StepsItemLabel>
        </StepsItem>
        <StepsSeparator />
        <StepsItem>
          <StepsItemIconContainer backgroundColor={'red'}>
            <AiOutlineFile />
          </StepsItemIconContainer>
          <StepsItemLabel>Hehe</StepsItemLabel>
        </StepsItem>
        <StepsSeparator />
        <StepsItem>
          <StepsItemIconContainer backgroundColor={'red'}>
            <AiOutlineFile />
          </StepsItemIconContainer>
          <StepsItemLabel>Hehe</StepsItemLabel>
        </StepsItem>
      </StepsContainer>
      <FooterContainer>
        <PrimaryButton>Loslegen</PrimaryButton>
      </FooterContainer>
    </Container>
  );
}

export default GetStarted;
