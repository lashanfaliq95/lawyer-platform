import React from 'react';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';
import { GoMailRead } from 'react-icons/go';

import formatMessages from 'components/formatMessages';
import ProgressBar from './ProgressBar';
import { PrimaryButton } from './Shared';

const messages = defineMessages({
  title: {
    id: 'app.proRegisterPage.accountConfirmed.title',
    defaultMessage: 'Your account has been confirmed!',
  },
  subTitle: {
    id: 'app.proRegisterPage.accountConfirmed.subTitle',
    defaultMessage: 'Get started to see how simple it works',
  },
  emailPlaceholder: {
    id: 'app.proRegisterPage.accountConfirmed.emailPlaceholder',
    defaultMessage: 'Experience Avoplan Pro',
  },
  button: {
    id: 'app.proRegisterPage.accountConfirmed.button',
    defaultMessage: 'Login',
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
  margin-top: 2.5rem;
  text-align: center;
`;

const SubTitle = styled.span`
  margin-top: 1rem;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0rem;
  margin-top: 1rem;
`;

const EmailAddress = styled.span`
  font-size: 25px;
  text-align: center;
  font-weight: 400;
  padding: 2rem 0rem;
`;

const FooterContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
`;

function AccountConfirmed() {
  return (
    <Container>
      <ProgressBar value={10} />
      <Title>{formatMessages(messages.title)}</Title>
      <IconContainer>
        <GoMailRead size={100} />
      </IconContainer>
      <EmailAddress>{formatMessages(messages.emailPlaceholder)}</EmailAddress>
      <SubTitle>{formatMessages(messages.subTitle)}</SubTitle>
      <FooterContainer>
        <PrimaryButton onClick={() => {}}>
          {formatMessages(messages.button)}
        </PrimaryButton>
      </FooterContainer>
    </Container>
  );
}

AccountConfirmed.propTypes = {};

export default AccountConfirmed;
