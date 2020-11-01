import React from 'react';

import FilterModal from 'components/Shared/FilterModal';
import ToggleSwitch from 'components/Shared/ToggleSwitch';

const ImmediateConfirmationFilter = () => (
  <FilterModal>
    <ToggleSwitch label="Immediate confirmation" />
  </FilterModal>
);

export default ImmediateConfirmationFilter;
