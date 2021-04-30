import React from 'react';
import PropTypes from 'prop-types';
import MockStep from './MockStep';
import { REGISTRATION_STEPS } from '../constants';

function Confirmation({ onStepChange }) {
  return (
    <MockStep
      onStepChange={onStepChange}
      previous={REGISTRATION_STEPS.HOW_TO_USE}
      next={REGISTRATION_STEPS.ACCOUNT_PENDING}
      title='Confirmation'
    />
  );
}

Confirmation.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default Confirmation;
