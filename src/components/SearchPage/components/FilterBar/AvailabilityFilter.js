import React from 'react';
import { Input, Label } from 'reactstrap';

import FilterModal from 'components/Shared/FilterModal';

const AvailabilityFilter = () => (
  <FilterModal>
    <Label check>
      <Input type="checkbox" />
      Today
    </Label>
    <Label check>
      <Input type="checkbox" />
      In Coming 3 days
    </Label>
  </FilterModal>
);

export default AvailabilityFilter;
