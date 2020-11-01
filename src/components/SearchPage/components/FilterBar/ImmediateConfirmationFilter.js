import React from 'react';

import ToggleSwitch from 'components/Shared/ToggleSwitch';
import messages from '../../messages';
import FilterModal from './FilterModal';

const ImmediateConfirmationFilter = () => (
  <FilterModal>
    <ToggleSwitch label={messages.immediateConfirmation} />
  </FilterModal>
);

export default ImmediateConfirmationFilter;
