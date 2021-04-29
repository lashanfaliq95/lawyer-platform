import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Form } from 'reactstrap';
import { useFormik } from 'formik';
import { defineMessages } from 'react-intl';
import { IoMdArrowBack } from 'react-icons/io';

import formatMessages from 'components/formatMessages';
import FloatingInputLabel from 'components/Shared/FloatingLabelInput';
import ProgressBar from './ProgressBar';
import { PrimaryButton, SecondaryButton } from './Shared';
import { REGISTRATION_STEPS } from '../constants';

const messages = defineMessages({
  title: {
    id: 'app.proRegisterPage.addressEntry.title',
    defaultMessage: 'Address',
  },
  subTitle: {
    id: 'app.proRegisterPage.addressEntry.subTitle',
    defaultMessage: 'Please enter the address of your law firm.',
  },
  road: {
    id: 'app.proRegisterPage.addressEntry.address',
    defaultMessage: 'Road',
  },
  houseNumber: {
    id: 'app.proRegisterPage.addressEntry.houseNumber',
    defaultMessage: 'House Number',
  },
  postalCode: {
    id: 'app.proRegisterPage.addressEntry.postalCode',
    defaultMessage: 'Postal Code',
  },
  city: {
    id: 'app.proRegisterPage.addressEntry.city',
    defaultMessage: 'City',
  },
  back: {
    id: 'app.proRegisterPage.personalData.back',
    defaultMessage: 'Back',
  },
  next: {
    id: 'app.proRegisterPage.personalData.next',
    defaultMessage: 'Next',
  },
  invalidRoad: {
    id: 'app.proRegisterPage.addressEntry.invalidRoad',
    defaultMessage: 'Please enter valid address',
  },
  invalidHouseNumber: {
    id: 'app.proRegisterPage.addressEntry.invalidHouseNumber',
    defaultMessage: 'Please enter valid house number',
  },
  invalidPostalCode: {
    id: 'app.proRegisterPage.addressEntry.invalidPostalCode',
    defaultMessage: 'Please enter valid postal code',
  },
  invalidCity: {
    id: 'app.proRegisterPage.addressEntry.invalidCity',
    defaultMessage: 'Please enter valid city',
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

const RowInputContainerSmall = styled.div`
  display: flex;
  flex: 2;
`;

const RowInputContainerLarge = styled.div`
  display: flex;
  flex: 3;
`;

const RowInputSeparator = styled.div`
  width: 10px;
`;

const FooterContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const BackIcon = styled(IoMdArrowBack)`
  margin-right: 0.5rem;
`;

function AddressEntry({ current, onStepChange, onSubmit }) {
  function handleOnAddressDataSubmit(values) {
    onSubmit({
      [REGISTRATION_STEPS.ADDRESS_ENTRY]: { ...values },
    });
    onStepChange(REGISTRATION_STEPS.PASSWORD_SETTING);
  }

  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
    setFieldValue,
  } = useFormik({
    initialValues: {
      road: '',
      houseNumber: '',
      postalCode: '',
      city: '',
    },
    validationSchema: Yup.object({
      road: Yup.string().required(messages.invalidRoad),
      houseNumber: Yup.string().required(messages.invalidHouseNumber),
      postalCode: Yup.string().required(messages.invalidPostalCode),
      city: Yup.string().required(messages.invalidCity),
    }),
    onSubmit: handleOnAddressDataSubmit,
  });

  useEffect(() => {
    Object.keys(current).forEach((key) => {
      setFieldValue(key, current[key]);
    });
    //  eslint-disable-next-line
  }, []);

  function handleOnPrevious() {
    onStepChange(REGISTRATION_STEPS.JOB_TITLE);
  }

  return (
    <Container>
      <ProgressBar value={4} />
      <Title>{formatMessages(messages.title)}</Title>
      <SubTitle>{formatMessages(messages.subTitle)}</SubTitle>
      <Form onSubmit={handleSubmit}>
        <RowInputContainer>
          <RowInputContainerLarge>
            <FloatingInputLabel
              label={messages.road}
              type='text'
              name='road'
              id='road'
              error={touched.road && errors.road}
              {...getFieldProps('road')}
            />
          </RowInputContainerLarge>
          <RowInputSeparator />
          <RowInputContainerSmall>
            <FloatingInputLabel
              label={messages.houseNumber}
              type='text'
              name='houseNumber'
              id='houseNumber'
              error={touched.houseNumber && errors.houseNumber}
              {...getFieldProps('houseNumber')}
            />
          </RowInputContainerSmall>
        </RowInputContainer>
        <RowInputContainer>
          <RowInputContainerSmall>
            <FloatingInputLabel
              label={messages.postalCode}
              type='text'
              name='postalCode'
              id='postalCode'
              error={touched.postalCode && errors.postalCode}
              {...getFieldProps('postalCode')}
            />
          </RowInputContainerSmall>
          <RowInputSeparator />
          <RowInputContainerLarge>
            <FloatingInputLabel
              label={messages.city}
              type='text'
              name='city'
              id='city'
              error={touched.city && errors.city}
              {...getFieldProps('city')}
            />
          </RowInputContainerLarge>
        </RowInputContainer>
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

AddressEntry.propTypes = {
  onStepChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  current: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.number.isRequired,
    telephoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddressEntry;
