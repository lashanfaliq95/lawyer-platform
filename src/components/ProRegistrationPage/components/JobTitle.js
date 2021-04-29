import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { Form } from 'reactstrap';
import { defineMessages } from 'react-intl';

import formatMessages from 'components/formatMessages';
import ProgressBar from './ProgressBar';
import FooterContainer from './FooterContainer';
import { REGISTRATION_STEPS } from '../constants';
import RadioButtonList from './RadioButtonList';

const messages = defineMessages({
  title: {
    id: 'app.proRegisterPage.jobTitleTitle',
    defaultMessage: 'Job Title',
  },
  description: {
    id: 'app.proRegisterPage.jobTitleDescription',
    defaultMessage: 'What is your job title?',
  },
  specializedLawyerMale: {
    id: 'app.proRegisterPage.specializedLawyerMale',
    defaultMessage: 'Specialized Lawyer',
  },
  lawyerMale: {
    id: 'app.proRegisterPage.lawyerMale',
    defaultMessage: 'Lawyer',
  },
  patentLawyerMale: {
    id: 'app.proRegisterPage.patentLawyerMale',
    defaultMessage: 'Patent Lawyer',
  },
  notaryMale: {
    id: 'app.proRegisterPage.notaryMale',
    defaultMessage: 'Notary',
  },
  taxConsultantMale: {
    id: 'app.proRegisterPage.taxConsultantMale',
    defaultMessage: 'Tax Consultant',
  },
  consultantMale: {
    id: 'app.proRegisterPage.consultantMale',
    defaultMessage: 'Consultant',
  },
  specializedLawyerFemale: {
    id: 'app.proRegisterPage.specializedLawyerFemale',
    defaultMessage: 'Specialized Lawyer',
  },
  lawyerFemale: {
    id: 'app.proRegisterPage.lawyerFemale',
    defaultMessage: 'Lawyer',
  },
  patentLawyerFemale: {
    id: 'app.proRegisterPage.patentLawyerFemale',
    defaultMessage: 'Patent Lawyer',
  },
  notaryFemale: {
    id: 'app.proRegisterPage.notaryFemale',
    defaultMessage: 'Notary',
  },
  taxConsultantFemale: {
    id: 'app.proRegisterPage.taxConsultantFemale',
    defaultMessage: 'Tax Consultant',
  },
  consultantFemale: {
    id: 'app.proRegisterPage.consultantFemale',
    defaultMessage: 'Consultant',
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

const Description = styled.span`
  margin-top: 0.5rem;
  display: block;
`;

const JobTitleSelectionContainer = styled.div`
  margin-top: 1rem;
`;

function JobTitle({ current, onStepChange, onSubmit }) {
  const jobTitles = [
    {
      value: 0,
      label: formatMessages(
        current.gender === 0
          ? messages.specializedLawyerMale
          : messages.specializedLawyerFemale,
      ),
    },
    {
      value: 1,
      label: formatMessages(
        current.gender === 0 ? messages.lawyerMale : messages.lawyerFemale,
      ),
    },
    {
      value: 2,
      label: formatMessages(
        current.gender === 0
          ? messages.patentLawyerMale
          : messages.patentLawyerFemale,
      ),
    },
    {
      value: 3,
      label: formatMessages(
        current.gender === 0 ? messages.notaryMale : messages.notaryFemale,
      ),
    },
    {
      value: 4,
      label: formatMessages(
        current.gender === 0
          ? messages.taxConsultantMale
          : messages.taxConsultantFemale,
      ),
    },
    {
      value: 5,
      label: formatMessages(
        current.gender === 0
          ? messages.consultantMale
          : messages.consultantFemale,
      ),
    },
  ];

  function handleOnJobTitleSubmit({ jobTitle }) {
    onSubmit({
      [REGISTRATION_STEPS.JOB_TITLE]: { jobTitle: jobTitle.value },
    });
    onStepChange(REGISTRATION_STEPS.ADDRESS_ENTRY);
  }

  const {
    handleSubmit,
    setFieldValue,
    values: { jobTitle },
  } = useFormik({
    initialValues: { jobTitle: null },
    onSubmit: handleOnJobTitleSubmit,
  });

  useEffect(() => {
    setFieldValue(
      'jobTitle',
      jobTitles.find(({ value }) => value === current.jobTitle),
    );
    //  eslint-disable-next-line
  }, []);

  function handleOnJobTitleOptionChange(option) {
    setFieldValue('jobTitle', option);
  }

  function handleOnPrevious() {
    onStepChange(REGISTRATION_STEPS.PERSONAL_DATA);
  }

  return (
    <Container>
      <ProgressBar value={3} />
      <Title>{formatMessages(messages.title)}</Title>
      <Description>{formatMessages(messages.description)}</Description>
      <Form onSubmit={handleSubmit}>
        <JobTitleSelectionContainer>
          <RadioButtonList
            options={jobTitles}
            selectedOption={jobTitle}
            onOptionChange={handleOnJobTitleOptionChange}
          />
        </JobTitleSelectionContainer>
        <FooterContainer onPrevious={handleOnPrevious} />
      </Form>
    </Container>
  );
}

JobTitle.propTypes = {
  onStepChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  current: PropTypes.shape({
    jobTitle: PropTypes.number.isRequired,
    gender: PropTypes.number.isRequired,
  }).isRequired,
};

export default JobTitle;
