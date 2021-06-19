/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSetState } from 'react-use';
import styled from 'styled-components';
import { BsExclamationCircle } from 'react-icons/bs';

import FloatingLabelPwdInput from 'components/Shared/FloatingLabelPwdInput';
import formatMessages from 'components/formatMessages';
import messages from '../messages';

import {
  ChangePassword as Container,
  Button,
  ButtonContainer,
} from '../styles';

const SecurityDescription = styled.span`
  font-size: 0.8rem;
`;

const ReloginInstruction = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
`;

function ChangePassword() {
  const [{ oldPassword, newPassword }, setState] = useSetState({
    oldPassword: '',
    newPassword: '',
  });
  return (
    <Container>
      <FloatingLabelPwdInput
        label={messages.pwBoxCurrentPassword}
        name='password'
        id='password'
        hideScoreWord
        securityTitle={messages.infoBoxTitle}
        onChange={({ target: { value } }) => {
          setState({ oldPassword: value });
        }}
        value={oldPassword}
      />
      <br />
      <FloatingLabelPwdInput
        label={messages.pwBoxNewPassword}
        name='password'
        id='password'
        showPwdStrength
        hideScoreWord
        securityTitle={messages.pwBoxSecurity}
        onChange={({ target: { value } }) => {
          setState({ newPassword: value });
        }}
        value={newPassword}
      />
      <SecurityDescription>
        {formatMessages(messages.pwBoxSecurityDescription)}
      </SecurityDescription>
      <br />
      <ReloginInstruction>
        <BsExclamationCircle color='red' />{' '}
        {formatMessages(messages.pwBoxReloginInstruction)}
      </ReloginInstruction>
      <ButtonContainer>
        <Button type='button' onClick={() => {}}>
          <div>{formatMessages(messages.pwBoxBtnChangePassword)}</div>
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default ChangePassword;
