import React, { useState } from 'react';

import ToggleSwitch from 'components/Shared/ToggleSwitch';
import { bool } from 'prop-types';
import messages from '../../messages';
import FilterModal from './FilterModal';

const FreeFirstAppointmentFilter = ({ isFilterActive }) => {
  const [isFreeFirstAppointment, setIsFreeFirstAppointment] = useState(false);
  const isBtnDisabled = isFreeFirstAppointment ? false : !isFilterActive;

  const onClickCancel = () => {
    setIsFreeFirstAppointment(false);
  };
  return (
    <FilterModal
      isCancelBtnDisabled={isBtnDisabled}
      onClickCancel={onClickCancel}
    >
      <ToggleSwitch
        label={messages.freeFirstAppointment}
        isChecked={isFreeFirstAppointment}
        onChange={() => setIsFreeFirstAppointment(!isFreeFirstAppointment)}
      />
    </FilterModal>
  );
};

FreeFirstAppointmentFilter.propTypes = {
  isFilterActive: bool.isRequired,
};

export default FreeFirstAppointmentFilter;
