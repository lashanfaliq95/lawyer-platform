import React from 'react';

import ToggleSwitch from 'components/Shared/ToggleSwitch';
import messages from '../../messages';
import FilterModal from './FilterModal';

const FreeFirstAppointmentFilter = () => (
  <FilterModal>
    <ToggleSwitch label={messages.freeFirstAppointment} />
  </FilterModal>
);

export default FreeFirstAppointmentFilter;
