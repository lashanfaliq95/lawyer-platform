import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Form } from 'reactstrap';
import { useFormik } from 'formik';
import { defineMessages } from 'react-intl';
import { IoMdArrowBack } from 'react-icons/io';

import formatMessages from 'components/formatMessages';
import FloatingInputLabel from 'components/Shared/FloatingLabelInput';
import RadioButtonList from './RadioButtonList';
import ProgressBar from './ProgressBar';
import { PrimaryButton, SecondaryButton } from './Shared';
import { REGISTRATION_STEPS } from '../constants';

const messages = defineMessages({
  title: {
    id: 'app.proRegisterPage.personalData.title',
    defaultMessage: 'Personal Data',
  },
  subTitle: {
    id: 'app.proRegisterPage.personalData.subTitle',
    defaultMessage: 'Enter your contact details.',
  },
  firstName: {
    id: 'app.proRegisterPage.personalData.firstName',
    defaultMessage: 'First name',
  },
  lastName: {
    id: 'app.proRegisterPage.personalData.lastName',
    defaultMessage: 'Last name',
  },
  email: {
    id: 'app.proRegisterPage.personalData.email',
    defaultMessage: 'E-Mail',
  },
  telephoneNumber: {
    id: 'app.proRegisterPage.personalData.telephoneNumber',
    defaultMessage: 'Telephone',
  },
  male: {
    id: 'app.proRegisterPage.personalData.male',
    defaultMessage: 'Male',
  },
  female: {
    id: 'app.proRegisterPage.personalData.female',
    defaultMessage: 'Female',
  },
  back: {
    id: 'app.proRegisterPage.personalData.back',
    defaultMessage: 'Back',
  },
  next: {
    id: 'app.proRegisterPage.personalData.next',
    defaultMessage: 'Next',
  },
  genderTitle: {
    id: 'app.proRegisterPage.personalData.genderTitle',
    defaultMessage: 'What is your gender?',
  },
  genderDescription: {
    id: 'app.proRegisterPage.personalData.genderDescription',
    defaultMessage:
      'We need it so that the job title in your Avoplan profile is gender-appropriate.',
  },
  invalidFirstName: {
    id: 'app.proRegisterPage.personalData.invalidFirstName',
    defaultMessage: 'Please enter valid first name',
  },
  invalidLastName: {
    id: 'app.proRegisterPage.personalData.invalidLastName',
    defaultMessage: 'Please enter valid last name',
  },
  invalidEmail: {
    id: 'app.proRegisterPage.personalData.invalidEmail',
    defaultMessage: 'Please enter valid email address',
  },
  invalidNumber: {
    id: 'app.proRegisterPage.personalData.invalidNumber',
    defaultMessage: 'Please enter valid telephone number',
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

const SubTitle = styled.span`
  margin-top: 0.5rem;
  display: block;
  font-size: 20px;
`;

const RowInputContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const RowInputSeparator = styled.div`
  width: 10px;
`;

const GenderSubtitle = styled(SubTitle)`
  margin-top: 1.5rem;
`;

const GenderSelectionDescription = styled.span`
  margin-top: 0.5rem;
  display: block;
`;

const GenderSelectionContainer = styled.div`
  margin-top: 1rem;
`;

const FooterContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const BackIcon = styled(IoMdArrowBack)`
  margin-right: 0.5rem;
`;

function PersonalData({ onStepChange }) {
  const genders = [
    {
      value: 0,
      label: formatMessages(messages.male),
    },
    {
      value: 1,
      label: formatMessages(messages.female),
    },
  ];

  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
    setFieldValue,
    values: { gender },
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      telephoneNumber: '',
      gender: genders[0],
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(messages.invalidFirstName),
      lastName: Yup.string().required(messages.invalidLastName),
      email: Yup.string()
        .email(messages.invalidEmail)
        .required(messages.invalidEmail),
      telephoneNumber: Yup.string()
        .required(messages.invalidNumber)
        .min(5, messages.invalidNumber)
        .max(15, messages.invalidNumber),
    }),
    onSubmit: () => {},
  });

  function handleOnGenderOptionChange(option) {
    setFieldValue('gender', option);
  }

  function handleOnPrevious() {
    onStepChange(REGISTRATION_STEPS.GET_STARTED);
  }

  return (
    <Container>
      <ProgressBar value={2} />
      <Title>{formatMessages(messages.title)}</Title>
      <SubTitle>{formatMessages(messages.subTitle)}</SubTitle>
      <Form onSubmit={handleSubmit}>
        <RowInputContainer>
          <FloatingInputLabel
            label={messages.firstName}
            type='text'
            name='firstName'
            id='firstName'
            error={touched.firstName && errors.firstName}
            {...getFieldProps('firstName')}
          />
          <RowInputSeparator />
          <FloatingInputLabel
            label={messages.lastName}
            type='text'
            name='lastName'
            id='lastName'
            error={touched.lastName && errors.lastName}
            {...getFieldProps('lastName')}
          />
        </RowInputContainer>
        <RowInputContainer>
          <FloatingInputLabel
            label={messages.email}
            type='email'
            name='email'
            id='email'
            error={touched.email && errors.email}
            {...getFieldProps('email')}
          />
        </RowInputContainer>
        <RowInputContainer>
          <FloatingInputLabel
            label={messages.telephoneNumber}
            type='text'
            name='telephoneNumber'
            id='telephoneNumber'
            error={touched.telephoneNumber && errors.telephoneNumber}
            {...getFieldProps('telephoneNumber')}
          />
        </RowInputContainer>
        <GenderSubtitle>{formatMessages(messages.genderTitle)}</GenderSubtitle>
        <GenderSelectionDescription>
          {formatMessages(messages.genderDescription)}
        </GenderSelectionDescription>
        <GenderSelectionContainer>
          <RadioButtonList
            options={genders}
            selectedOption={gender}
            onOptionChange={handleOnGenderOptionChange}
          />
        </GenderSelectionContainer>
        <FooterContainer>
          <SecondaryButton type='button' onClick={handleOnPrevious}>
            <BackIcon />
            {formatMessages(messages.back)}
          </SecondaryButton>
          <RowInputSeparator />
          <PrimaryButton type='submit'>
            {formatMessages(messages.next)}
          </PrimaryButton>
        </FooterContainer>
      </Form>
    </Container>
  );
}

PersonalData.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default PersonalData;
