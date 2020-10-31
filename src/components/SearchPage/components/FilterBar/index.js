import React, { memo } from 'react';
import { bool, shape } from 'prop-types';

import FilterButton from 'components/Shared/FilterButton';
import AvailabilityFilter from './AvailabilityFilter';
import SpecializationFilter from './SpecializationFilter';
import LanguageFilter from './LanguageFilter';
import FreeFirstAppointmentFilter from './FreeFirstAppointmentFilter';
import ImmediateConfirmationFilter from './ImmediateConfirmationFilter';

const FilterBar = ({
  filters: {
    availability,
    specializations,
    freeFirstAppointment,
    appointmentWithImmediateConfirmation,
    language,
  },
}) => (
  <div className="filter-bar">
    <FilterButton name="Availability" className="availability-filter" isFilterActive={availability}>
      <AvailabilityFilter />
    </FilterButton>
    <FilterButton name="Specializations" className="specialization-filter" isFilterActive={specializations}>
      <SpecializationFilter />
    </FilterButton>
    <FilterButton name="Free First Appointment" className="appointment-free-first-filter" isFilterActive={freeFirstAppointment}>
      <FreeFirstAppointmentFilter />
    </FilterButton>
    <FilterButton name="Appointment With immediate confirmation" className="appointment-immediate-confirmation-filter" isFilterActive={appointmentWithImmediateConfirmation}>
      <ImmediateConfirmationFilter />
    </FilterButton>
    <FilterButton name="Language" className="language-filter" isFilterActive={language}>
      <LanguageFilter />
    </FilterButton>
  </div>
);

FilterBar.propTypes = {
  filters: shape({
    availability: bool.isRequired,
    specializations: bool.isRequired,
    freeFirstAppointment: bool.isRequired,
    appointmentWithImmediateConfirmation: bool.isRequired,
    language: bool.isRequired,
  }).isRequired,
};

export default memo(FilterBar);
