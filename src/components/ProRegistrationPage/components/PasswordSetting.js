import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form } from 'reactstrap';
import { useFormik } from 'formik';
import { defineMessages } from 'react-intl';

import formatMessages from 'components/formatMessages';
import FloatingLabelPwdInput from 'components/Shared/FloatingLabelPwdInput';
import FooterContainer from './FooterContainer';
import ProgressBar from './ProgressBar';
import { REGISTRATION_STEPS } from '../constants';

const messages = defineMessages({
  title: {
    id: 'app.proRegisterPage.passwordSetting.title',
    defaultMessage: 'Password',
  },
  subtitle: {
    id: 'app.proRegisterPage.passwordSetting.subtitle',
    defaultMessage:
      'Please choose a long password that is hard to be guessed by the others.',
  },
  hint: {
    id: 'app.proRegisterPage.passwordSetting.hint',
    defaultMessage: 'Password',
  },
  security: {
    id: 'app.proRegisterPage.passwordSetting.security',
    defaultMessage: 'Security',
  },
  hintDescription: {
    id: 'app.proRegisterPage.passwordSetting.hintDescription',
    defaultMessage:
      'You are almost done, a bit longer with some symbols will make the password more secured.',
  },
  invalidPassword: {
    id: 'app.proRegisterPage.passwordSetting.invalidPassword',
    defaultMessage: "Password can't be empty",
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
  margin-top: 1rem;
`;

const Subtitle = styled.span`
  margin-top: 0.5rem;
  display: block;
`;

const HintDescription = styled.span`
  font-size: 0.8rem;
`;

const RowInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

function PasswordSetting({ current, onStepChange, onSubmit }) {
  function handleOnPasswordSettingSubmit({ password }) {
    onSubmit({
      [REGISTRATION_STEPS.PASSWORD_SETTING]: { password },
    });
    onStepChange(REGISTRATION_STEPS.TUTORIAL);
  }

  function handleOnPrevious() {
    onStepChange(REGISTRATION_STEPS.ADDRESS_ENTRY);
  }

  const { handleSubmit, getFieldProps, setFieldValue } = useFormik({
    initialValues: {
      password: '',
    },
    onSubmit: handleOnPasswordSettingSubmit,
  });

  useEffect(() => {
    Object.keys(current).forEach((key) => {
      setFieldValue(key, current[key]);
    });
    //  eslint-disable-next-line
  }, []);

  return (
    <Container>
      <ProgressBar value={5} />
      <Title>{formatMessages(messages.title)}</Title>
      <Subtitle>{formatMessages(messages.subtitle)}</Subtitle>
      <Form onSubmit={handleSubmit}>
        <RowInputContainer>
          <FloatingLabelPwdInput
            label={messages.hint}
            name='password'
            id='password'
            showPwdStrength
            hideScoreWord
            securityTitle={messages.security}
            required
            {...getFieldProps('password')}
          />
          <HintDescription>
            {formatMessages(messages.hintDescription)}
          </HintDescription>
        </RowInputContainer>
        <FooterContainer onPrevious={handleOnPrevious} />
      </Form>
    </Container>
  );
}

PasswordSetting.propTypes = {
  current: PropTypes.shape({
    password: '',
  }).isRequired,
  onStepChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PasswordSetting;
