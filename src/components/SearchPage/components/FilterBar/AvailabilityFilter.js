import React, { useState } from 'react';
import { bool } from 'prop-types';
import { Input, Label } from 'reactstrap';

import formatMessages from 'components/formatMessages';
import FilterModal from './FilterModal';
import messages from '../../messages';

const getIsCancelBtnDisabled = ({ isFilterActive, isFreeInComingThreeDays, isFreeToday }) => {
  if (isFreeInComingThreeDays || isFreeToday) {
    return false;
  }
  return !isFilterActive;
};

const AvailabilityFilter = ({ isFilterActive }) => {
  const [isFreeToday, setIsFreeToday] = useState(false);
  const [isFreeInComingThreeDays, setIsFreeInComingThreeDays] = useState(false);
  const isCancelBtnDisabled = getIsCancelBtnDisabled({
    isFilterActive,
    isFreeToday,
    isFreeInComingThreeDays,
  });

  const onClickCancel = () => {
    setIsFreeToday(false);
    setIsFreeInComingThreeDays(false);
  };
  return (
    <FilterModal
      isCancelBtnDisabled={isCancelBtnDisabled}
      onClickCancel={onClickCancel}
    >
      <Label check>
        <Input
          type="checkbox"
          checked={isFreeToday}
          onChange={() => { setIsFreeToday(!isFreeToday); }}
        />
        {formatMessages(messages.today)}
      </Label>
      <Label check>
        <Input
          type="checkbox"
          checked={isFreeInComingThreeDays}
          onChange={() => { setIsFreeInComingThreeDays(!isFreeInComingThreeDays); }}
        />
        {formatMessages(messages.comingThreeDays)}
      </Label>
    </FilterModal>
  );
};

AvailabilityFilter.propTypes = {
  isFilterActive: bool.isRequired,
};

export default AvailabilityFilter;
