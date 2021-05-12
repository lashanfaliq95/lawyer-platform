import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useDropdown, { Dropdown } from 'hooks/useDropdown';
import FilterPaneDatePicker from './FilterPaneDatePicker';
import FilterPaneStatusPicker from './FilterPaneStatusPicker';

const Container = styled.div`
  margin-top: 0.5rem;
`;
const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #d2d2d2;
  border-radius: 2.5rem;
  background-color: transparent;
  margin-right: 0.5rem;

  &:focus {
    outline: none;
  }
`;

const FilterButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

function FilterPane({
  filterStartDate,
  filterEndDate,
  selectedTypes,
  onFilterDateSelect,
  onFilterTypeChange,
}) {
  const {
    ref: datePickerRef,
    isOpen: datePickerOpen,
    toggleIsOpen: toggleDatePickerOpen,
    hasLayoutLoaded: hasDatePickerLoaded,
  } = useDropdown({
    calculateHeight: true,
  });
  const {
    ref: statusPickerRef,
    isOpen: statusPickerOpen,
    toggleIsOpen: toggleStatusPickerOpen,
  } = useDropdown({});

  return (
    <Container>
      <FilterButtonContainer>
        <FilterButton onClick={toggleDatePickerOpen}>Zeitraum</FilterButton>
        <Dropdown
          ref={datePickerRef}
          isOpen={datePickerOpen}
          hasLayoutLoaded={hasDatePickerLoaded}
        >
          <FilterPaneDatePicker
            filterStartDate={filterStartDate}
            filterEndDate={filterEndDate}
            isOpen={datePickerOpen}
            toggleIsOpen={toggleDatePickerOpen}
            onFilterDateSelect={onFilterDateSelect}
          />
        </Dropdown>
      </FilterButtonContainer>
      <FilterButtonContainer>
        <FilterButton onClick={toggleStatusPickerOpen}>
          Terminstatus
        </FilterButton>
        <Dropdown ref={statusPickerRef} isOpen={statusPickerOpen}>
          <FilterPaneStatusPicker
            selectedTypes={selectedTypes}
            isOpen={statusPickerOpen}
            onFilterTypeChange={onFilterTypeChange}
            toggleIsOpen={toggleStatusPickerOpen}
          />
        </Dropdown>
      </FilterButtonContainer>
      <FilterButton>Angelegenheit</FilterButton>
      <FilterButton>Experte</FilterButton>
      <FilterButton>Terminart</FilterButton>
      <FilterButton>Standort</FilterButton>
    </Container>
  );
}

FilterPane.propTypes = {
  filterStartDate: PropTypes.shape({}).isRequired,
  filterEndDate: PropTypes.shape({}).isRequired,
  selectedTypes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onFilterDateSelect: PropTypes.func.isRequired,
  onFilterTypeChange: PropTypes.func.isRequired,
};

export default FilterPane;
