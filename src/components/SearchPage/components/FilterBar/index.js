import React, { memo } from 'react';

import FilterButton from 'components/Shared/FilterButton';
import AvailabilityFilter from './AvailabilityFilter';
import SpecializationFilter from './SpecializationFilter';

const FilterBar = () => (
  <div className="filter-bar">
    <FilterButton name="test" className="availability-filter">
      <AvailabilityFilter />
    </FilterButton>
    <FilterButton name="test" className="specialization-filter" isFilterActive>
      <SpecializationFilter />
    </FilterButton>
    <FilterButton name="test" />
    <FilterButton name="test" />
  </div>
);

export default memo(FilterBar);
