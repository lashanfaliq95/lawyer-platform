import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { defineMessages } from 'react-intl';

import { PrimaryButton } from 'components/Shared/Buttons';
import FloatingLabelInput from 'components/Shared/FloatingLabelInput';
import FloatingLabelPwdInput from 'components/Shared/FloatingLabelPwdInput';
import formatMessages from 'components/formatMessages';
import {
  FaCopyright,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const messages = defineMessages({
  password: {
    id: 'app.proLogin.password',
    defaultMessage: 'Password',
  },
  forgotPassword: {
    id: 'app.proLogin.forgotPassword',
    defaultMessage: 'Forgot Password?',
  },
  invalidPassword: {
    id: 'app.proLogin.invalidPassword',
    defaultMessage: 'Password should contain minimum 6 characters',
  },
  email: {
    id: 'app.proLogin.email',
    defaultMessage: 'E-mail',
  },
  invalidEmail: {
    id: 'app.proLogin.invalidEmail',
    defaultMessage: 'Please enter valid email address',
  },
  login: {
    id: 'app.proLogin.login',
    defaultMessage: 'Login',
  },
  newUser: {
    id: 'app.proLogin.newUser',
    defaultMessage: 'Are you new in Avoplan Pro?',
  },
  register: {
    id: 'app.proLogin.register',
    defaultMessage: 'Register',
  },
});

const Container = styled.div`
  border: 1px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const LoginHeader = styled.div`
  flex: 1;
  display: flex;
`;

const LoginForm = styled.form`
  margin: auto;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #ffffff;
`;

const Title = styled.span`
  font-size: 20px;
  text-align: center;
  margin: 1rem;
`;

const FormInputContainer = styled.div`
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
`;

const Label = styled.span`
  display: inline-block;
  font-weight: 600;
  color: #80807f;
`;

const HighlightedLabel = styled(Label)`
  margin-left: 0.25rem;
  color: #0096dd;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
  position: relative;
`;

const FooterLabelItem = styled.span`
  padding: 0 2rem;
`;

const CopyRightIcon = styled.div`
  margin-right: 0.5rem;
  display: inline-block;
`;

const IconContainer = styled.div`
  padding: 1rem;
`;

const IconsPane = styled.div`
  display: flex;
`;

const LeftPane = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const RightPane = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

function ProLoginPage() {
  function handleOnLoginSubmit() {}
  const {
    submitForm, touched, getFieldProps, errors,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(messages.invalidEmail)
        .required(messages.invalidEmail),
      password: Yup.string()
        .min(6, messages.invalidPassword)
        .required(messages.invalidPassword),
    }),
    onSubmit: handleOnLoginSubmit,
  });

  return (
    <Container>
      <LoginHeader>
        <LoginForm onSubmit={submitForm}>
          <Title>Avoplan Pro</Title>
          <FormInputContainer>
            <FloatingLabelInput
              label={messages.email}
              type='email'
              name='email'
              id='email'
              error={touched.email && errors.email}
              {...getFieldProps('email')}
            />
          </FormInputContainer>
          <FormInputContainer>
            <FloatingLabelPwdInput
              id='password'
              name='password'
              error={touched.password && errors.password}
              label={messages.password}
              forgotPwdBtnText={messages.forgotPassword}
              required
              showForgotPwdBtn
              {...getFieldProps('password')}
            />
          </FormInputContainer>
          <ButtonContainer>
            <PrimaryButton>{formatMessages(messages.login)}</PrimaryButton>
          </ButtonContainer>
          <RegisterContainer>
            <Label>{formatMessages(messages.newUser)}</Label>
            <HighlightedLabel>
              {formatMessages(messages.register)}
            </HighlightedLabel>
          </RegisterContainer>
        </LoginForm>
      </LoginHeader>
      <FooterContainer>
        <Footer>
          <LeftPane>
            <FooterLabelItem>
              <CopyRightIcon>
                <FaCopyright />
              </CopyRightIcon>
              2021 Avoplan Pro
            </FooterLabelItem>
          </LeftPane>
          <IconsPane>
            <IconContainer>
              <FaFacebookF size={20} />
            </IconContainer>
            <IconContainer>
              <FaInstagram size={20} />
            </IconContainer>
            <IconContainer>
              <FaLinkedinIn size={20} />
            </IconContainer>
          </IconsPane>
          <RightPane>
            <FooterLabelItem>Impressum</FooterLabelItem>
            <FooterLabelItem>Datenschutz</FooterLabelItem>
            <FooterLabelItem>AGB</FooterLabelItem>
          </RightPane>
        </Footer>
      </FooterContainer>
    </Container>
  );
}

export default ProLoginPage;
