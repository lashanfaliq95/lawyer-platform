import React from 'react';

import FilterModal from 'components/Shared/FilterModal';
import ToggleSwitch from 'components/Shared/ToggleSwitch';

const FreeFirstAppointmentFilter = () => (
  <FilterModal>
    <ToggleSwitch label="Free first appointment" />
  </FilterModal>
);

export default FreeFirstAppointmentFilter;
