import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bool, func } from 'prop-types';

import ToggleSwitch from 'components/Shared/ToggleSwitch';
import messages from '../../messages';
import FilterModal from './FilterModal';
import { setFilters } from '../../actions';

const ImmediateConfirmationFilter = ({ isFilterActive, onClose }) => {
  const dispatch = useDispatch();

  const [isImmediateConfirmation, setIsImmediateConfirmation] = useState(
    isFilterActive,
  );
  const isBtnDisabled = isImmediateConfirmation ? false : !isFilterActive;

  const onClickCancel = () => {
    setIsImmediateConfirmation(false);
  };

  const onClickSave = () => {
    dispatch(
      setFilters({
        appointmentWithImmediateConfirmation: isImmediateConfirmation,
      }),
    );
    onClose();
  };

  return (
    <FilterModal
      isCancelBtnDisabled={isBtnDisabled}
      onClickCancel={onClickCancel}
      onClickSave={onClickSave}
    >
      <ToggleSwitch
        label={messages.immediateConfirmation}
        isChecked={isImmediateConfirmation}
        onChange={() => {
          setIsImmediateConfirmation(!isImmediateConfirmation);
        }}
      />
    </FilterModal>
  );
};

ImmediateConfirmationFilter.propTypes = {
  isFilterActive: bool.isRequired,
  onClose: func.isRequired,
};

export default ImmediateConfirmationFilter;
