import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defineMessages, useIntl } from 'react-intl';

import useDropdown, { Dropdown } from 'hooks/useDropdown';
import FilterPaneDatePicker from './FilterPaneDatePicker';
import FilterPaneStatusPicker from './FilterPaneStatusPicker';

const messages = defineMessages({
  period: {
    id: 'app.proUserAppointments.filterPane.period',
    defaultMessage: 'Period',
  },
  status: {
    id: 'app.proUserAppointments.filterPane.status',
    defaultMessage: 'Appointment Status',
  },
  matter: {
    id: 'app.proUserAppointments.filterPane.matter',
    defaultMessage: 'Matters',
  },
  experts: {
    id: 'app.proUserAppointments.filterPane.experts',
    defaultMessage: 'Experts',
  },
  typeOfAppointment: {
    id: 'app.proUserAppointments.filterPane.typeOfAppointment',
    defaultMessage: 'Type of Appointment',
  },
  locations: {
    id: 'app.proUserAppointments.filterPane.locations',
    defaultMessage: 'Locations',
  },
});

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
  const intl = useIntl();

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
        <FilterButton onClick={toggleDatePickerOpen}>
          {intl.formatMessage(messages.period)}
        </FilterButton>
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
          {intl.formatMessage(messages.status)}
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
      <FilterButton>{intl.formatMessage(messages.matter)}</FilterButton>
      <FilterButton>{intl.formatMessage(messages.experts)}</FilterButton>
      <FilterButton>
        {intl.formatMessage(messages.typeOfAppointment)}
      </FilterButton>
      <FilterButton>{intl.formatMessage(messages.locations)}</FilterButton>
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
