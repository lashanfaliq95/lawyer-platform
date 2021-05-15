import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';
import { GoMailRead } from 'react-icons/go';

import formatMessages from 'components/formatMessages';
import ProgressBar from './ProgressBar';

const messages = defineMessages({
  title: {
    id: 'app.proRegisterPage.accountPending.title',
    defaultMessage: 'Confirm your Email Address',
  },
  subTitle: {
    id: 'app.proRegisterPage.accountPending.subTitle',
    defaultMessage:
      'Please check the email and click the link of the email to confirm the avoplan account',
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

function AccountPending({ email }) {
  return (
    <Container>
      <ProgressBar value={10} />
      <Title>{formatMessages(messages.title)}</Title>
      <IconContainer>
        <GoMailRead size={100} />
      </IconContainer>
      <EmailAddress>{email}</EmailAddress>
      <SubTitle>{formatMessages(messages.subTitle)}</SubTitle>
    </Container>
  );
}

AccountPending.propTypes = {
  email: PropTypes.string.isRequired,
};

export default AccountPending;
