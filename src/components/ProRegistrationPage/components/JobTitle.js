import React from 'react';
import PropTypes from 'prop-types';
import MockStep from './MockStep';
import { REGISTRATION_STEPS } from '../constants';

function JobTitle({ onStepChange }) {
  return (
    <MockStep
      onStepChange={onStepChange}
      previous={REGISTRATION_STEPS.PERSONAL_DATA}
      next={REGISTRATION_STEPS.ADDRESS_ENTRY}
      title='Job Title'
    />
  );
}

JobTitle.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default JobTitle;
