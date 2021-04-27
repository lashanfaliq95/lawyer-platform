import React from 'react';
import PropTypes from 'prop-types';
import MockStep from './MockStep';
import { REGISTRATION_STEPS } from '../constants';

function AccountPending({ onStepChange }) {
  return (
    <MockStep
      onStepChange={onStepChange}
      previous={REGISTRATION_STEPS.CONFIRMATION}
      next={REGISTRATION_STEPS.ACCOUNT_CONFIRMED}
      title='Account Pending'
    />
  );
}

AccountPending.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default AccountPending;
