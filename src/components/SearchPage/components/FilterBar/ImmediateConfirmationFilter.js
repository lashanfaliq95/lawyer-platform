import React, { useState } from 'react';
import { bool, func } from 'prop-types';

import ToggleSwitch from 'components/Shared/ToggleSwitch';
import messages from '../../messages';
import FilterModal from './FilterModal';

const ImmediateConfirmationFilter = ({ isFilterActive, onClose }) => {
  const [isImmediateConfirmation, setIsImmediateConfirmation] = useState(false);
  const isBtnDisabled = isImmediateConfirmation ? false : !isFilterActive;

  const onClickCancel = () => {
    setIsImmediateConfirmation(false);
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
        label={messages.immediateConfirmation}
        isChecked={isImmediateConfirmation}
        onChange={() => { setIsImmediateConfirmation(!isImmediateConfirmation); }}
      />
    </FilterModal>
  );
};

ImmediateConfirmationFilter.propTypes = {
  isFilterActive: bool.isRequired,
  onClose: func.isRequired,
};

export default ImmediateConfirmationFilter;
