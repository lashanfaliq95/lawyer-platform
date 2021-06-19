import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { Form } from 'reactstrap';

import formatMessages from 'components/formatMessages';
import RadioButtonList from 'components/Shared/RadioButtonList/RadioButtonList';
import { JOB_TITLES } from 'components/Shared/messages';
import { FEMALE_JOB_TYPES, MALE_JOB_TYPES } from 'components/Shared/options';
import { GENDER } from 'components/Shared/constants';
import ProgressBar from './ProgressBar';
import FooterContainer from './FooterContainer';
import { REGISTRATION_STEPS } from '../constants';

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
  const jobTitles =
    current.gender === GENDER.MALE ? MALE_JOB_TYPES : FEMALE_JOB_TYPES;

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
      <Title>{formatMessages(JOB_TITLES.title)}</Title>
      <Description>{formatMessages(JOB_TITLES.description)}</Description>
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
