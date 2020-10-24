import React from 'react';

import FilterButton from 'components/Shared/FilterButton';

const FilterBar = () => (
  <div className="filter-bar">
    <div className="filter-button-wrapper">
      <FilterButton name="test" isFilterActive />
    </div>
    <div className="filter-button-wrapper">
      <FilterButton name="test" isFilterActive />
    </div>
    <div className="filter-button-wrapper">
      <FilterButton name="test" />
    </div>
    <div className="filter-button-wrapper">
      <FilterButton name="test" />
    </div>
  </div>
);

export default FilterBar;
