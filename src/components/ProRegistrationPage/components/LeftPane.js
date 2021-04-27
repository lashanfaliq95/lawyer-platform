import React from 'react';
import styled from 'styled-components';

import formatMessages from 'components/formatMessages';
import headerImage from 'assets/images/header-home.png';
import messages from '../messages';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  height: 100%;
`;

const SubTitle = styled.span`
  text-align: justify;
`;

const Image = styled.img`
  width: 100%;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  max-width: 100%;
`;

function LeftPane() {
  return (
    <Container>
      <h1>{formatMessages(messages.title)}</h1>
      <SubTitle>{formatMessages(messages.description)}</SubTitle>
      <ImageContainer>
        <Image src={headerImage} alt='Avoplan Pro' />
      </ImageContainer>
    </Container>
  );
}

export default LeftPane;
