import React, { memo } from 'react';
import { bool, shape } from 'prop-types';

import FilterButton from 'components/Shared/FilterButton';
import AvailabilityFilter from './AvailabilityFilter';
import SpecializationFilter from './SpecializationFilter';
import LanguageFilter from './LanguageFilter';
import FreeFirstAppointmentFilter from './FreeFirstAppointmentFilter';
import ImmediateConfirmationFilter from './ImmediateConfirmationFilter';

import messages from '../../messages';

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
    <FilterButton
      name={messages.availabilityFilter}
      className="filter-modal"
      isFilterActive={availability}
    >
      <AvailabilityFilter />
    </FilterButton>
    <FilterButton
      name={messages.specializationFilter}
      className="filter-modal"
      isFilterActive={specializations}
    >
      <SpecializationFilter />
    </FilterButton>
    <FilterButton
      name={messages.firstAppointmentFilter}
      className="filter-modal"
      isFilterActive={freeFirstAppointment}
    >
      <FreeFirstAppointmentFilter />
    </FilterButton>
    <FilterButton
      name={messages.appointmentWithConfirmationFilter}
      className="filter-modal"
      isFilterActive={appointmentWithImmediateConfirmation}
    >
      <ImmediateConfirmationFilter />
    </FilterButton>
    <FilterButton
      name={messages.languageFilter}
      className="filter-modal"
      isFilterActive={language}
    >
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
