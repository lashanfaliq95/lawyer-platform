import React from 'react';
import { Input, Label } from 'reactstrap';

import formatMessages from 'components/formatMessages';
import FilterModal from './FilterModal';
import messages from '../../messages';

const AvailabilityFilter = () => (
  <FilterModal>
    <Label check>
      <Input type="checkbox" />
      {formatMessages(messages.today)}
    </Label>
    <Label check>
      <Input type="checkbox" />
      {formatMessages(messages.comingThreeDays)}
    </Label>
  </FilterModal>
);

export default AvailabilityFilter;
