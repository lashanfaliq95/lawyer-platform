import React from 'react';
import styled from 'styled-components';
import { BsFillLockFill } from 'react-icons/bs';

import formatMessages from 'components/formatMessages';
import messages from '../messages';
import {
  Button,
  ButtonContainer,
  Container,
  InfoBox,
  InfoBoxContent,
  InfoBoxContainer,
  IconContainer,
} from '../styles';

const FillerContainer = styled.div`
  width: 100%;
  height: 3rem;
`;

function InformationBox() {
  function handleOnClick() {
    // show Learn more
  }

  return (
    <Container>
      <FillerContainer />
      <InfoBox secondary>
        <InfoBoxContainer>
          <IconContainer>
            <BsFillLockFill size={40} />
          </IconContainer>
          <InfoBoxContent>
            <h6>{formatMessages(messages.infoBoxTitle)}</h6>
            <span>{formatMessages(messages.infoBoxDescription)}</span>
          </InfoBoxContent>
        </InfoBoxContainer>
        <ButtonContainer>
          <Button type='button' onClick={handleOnClick}>
            <div>{formatMessages(messages.infoBoxBtn)}</div>
          </Button>
        </ButtonContainer>
      </InfoBox>
    </Container>
  );
}

export default InformationBox;
