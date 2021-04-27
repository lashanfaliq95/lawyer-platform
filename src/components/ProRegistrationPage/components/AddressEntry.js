import React from 'react';
import PropTypes from 'prop-types';
import MockStep from './MockStep';
import { REGISTRATION_STEPS } from '../constants';

function AddressEntry({ onStepChange }) {
  return (
    <MockStep
      onStepChange={onStepChange}
      previous={REGISTRATION_STEPS.JOB_TITLE}
      next={REGISTRATION_STEPS.PASSWORD_SETTING}
      title='Address Entry'
    />
  );
}

AddressEntry.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default AddressEntry;
