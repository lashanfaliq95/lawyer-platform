import React from 'react';
import PropTypes from 'prop-types';
import MockStep from './MockStep';
import { REGISTRATION_STEPS } from '../constants';

function PersonalData({ onStepChange }) {
  return (
    <MockStep
      onStepChange={onStepChange}
      previous={REGISTRATION_STEPS.GET_STARTED}
      next={REGISTRATION_STEPS.JOB_TITLE}
      title='Personal Data'
    />
  );
}

PersonalData.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default PersonalData;
