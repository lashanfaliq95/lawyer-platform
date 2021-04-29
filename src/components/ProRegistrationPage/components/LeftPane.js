import React from 'react';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';

import formatMessages from 'components/formatMessages';
import headerImage from 'assets/images/header-home.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  height: 100%;
`;

const SubTitle = styled.span`
  text-align: justify;
  padding: 50px 0;
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

const messages = defineMessages({
  title: {
    id: 'app.proRegisterPage.titleText',
    defaultMessage: 'Future of Legal Consultation',
  },
  description: {
    id: 'app.proRegisterPage.descriptionText',
    defaultMessage:
      'Avoplan Pro is an innovative solution for lawyers to get more clients and money',
  },
});

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
