import React from 'react';
import PropTypes from 'prop-types';
import MockStep from './MockStep';
import { REGISTRATION_STEPS } from '../constants';

function PasswordSetting({ onStepChange }) {
  return (
    <MockStep
      onStepChange={onStepChange}
      previous={REGISTRATION_STEPS.ADDRESS_ENTRY}
      next={REGISTRATION_STEPS.HOW_TO_USE}
      title='Password Setting'
    />
  );
}

PasswordSetting.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default PasswordSetting;
