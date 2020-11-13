import React, { useState } from 'react';

import ToggleSwitch from 'components/Shared/ToggleSwitch';
import { bool, func } from 'prop-types';
import messages from '../../messages';
import FilterModal from './FilterModal';

const FreeFirstAppointmentFilter = ({ isFilterActive, onClose }) => {
  const [isFreeFirstAppointment, setIsFreeFirstAppointment] = useState(false);
  const isBtnDisabled = isFreeFirstAppointment ? false : !isFilterActive;

  const onClickCancel = () => {
    setIsFreeFirstAppointment(false);
  };

  const onClickSave = () => {
    onClose();
  };

  return (
    <FilterModal
      isCancelBtnDisabled={isBtnDisabled}
      onClickCancel={onClickCancel}
      onClickSave={onClickSave}
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
  onClose: func.isRequired,
};

export default FreeFirstAppointmentFilter;
