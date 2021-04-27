import React from 'react';
import PropTypes from 'prop-types';
import MockStep from './MockStep';
import { REGISTRATION_STEPS } from '../constants';

function HowToUse({ onStepChange }) {
  return (
    <MockStep
      onStepChange={onStepChange}
      previous={REGISTRATION_STEPS.PASSWORD_SETTING}
      next={REGISTRATION_STEPS.CONFIRMATION}
      title='How to use'
    />
  );
}

HowToUse.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default HowToUse;
