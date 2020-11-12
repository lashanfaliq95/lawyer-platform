import React, { useState } from 'react';
import { bool } from 'prop-types';

import ToggleSwitch from 'components/Shared/ToggleSwitch';
import messages from '../../messages';
import FilterModal from './FilterModal';

const ImmediateConfirmationFilter = ({ isFilterActive }) => {
  const [isImmediateConfirmation, setIsImmediateConfirmation] = useState(false);
  const isBtnDisabled = isImmediateConfirmation ? false : !isFilterActive;

  const onClickCancel = () => {
    setIsImmediateConfirmation(false);
  };

  return (
    <FilterModal
      isCancelBtnDisabled={isBtnDisabled}
      onClickCancel={onClickCancel}
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
};

export default ImmediateConfirmationFilter;
