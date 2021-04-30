import React from 'react';
import PropTypes from 'prop-types';
import MockStep from './MockStep';
import { REGISTRATION_STEPS } from '../constants';

function AccountConfirmed({ onStepChange }) {
  return (
    <MockStep
      onStepChange={onStepChange}
      previous={REGISTRATION_STEPS.ACCOUNT_PENDING}
      title='Account Confirmed'
    />
  );
}

AccountConfirmed.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default AccountConfirmed;
