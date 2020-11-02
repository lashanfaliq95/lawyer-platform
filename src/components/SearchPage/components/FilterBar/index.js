import React, { memo } from 'react';
import {
  bool, shape, arrayOf,
} from 'prop-types';

import FilterButton from 'components/Shared/FilterButton';
import AvailabilityFilter from './AvailabilityFilter';
import SpecializationFilter from './SpecializationFilter';
import LanguageFilter from './LanguageFilter';
import FreeFirstAppointmentFilter from './FreeFirstAppointmentFilter';
import ImmediateConfirmationFilter from './ImmediateConfirmationFilter';

import messages from '../../messages';

const FilterBar = ({
  activeFilters: {
    activeAvailability,
    activeSpecializations,
    freeFirstAppointment,
    appointmentWithImmediateConfirmation,
    activeLanguages,
  },
  filters: {
    specializations,
    languages,
  },
}) => (
  <div className="filter-bar">
    <FilterButton
      name={messages.availabilityFilter}
      className="filter-modal"
      isFilterActive={activeAvailability.length > 0}
    >
      <AvailabilityFilter />
    </FilterButton>
    <FilterButton
      name={messages.specializationFilter}
      className="filter-modal"
      isFilterActive={activeSpecializations.length > 0}
    >
      <SpecializationFilter {...specializations} />
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
      isFilterActive={activeLanguages.length > 0}
    >
      <LanguageFilter languages={languages} />
    </FilterButton>
  </div>
);

FilterBar.propTypes = {
  filters: shape({
    availability: bool.isRequired,
    specializations: bool.isRequired,
    freeFirstAppointment: bool.isRequired,
    appointmentWithImmediateConfirmation: bool.isRequired,
    languages: bool.isRequired,
  }).isRequired,
  activeFilters: shape({
    activeAvailability: arrayOf().isRequired,
    activeSpecializations: arrayOf().isRequired,
    freeFirstAppointment: bool.isRequired,
    appointmentWithImmediateConfirmation: bool.isRequired,
    activeLanguages: arrayOf().isRequired,
  }).isRequired,
};

export default memo(FilterBar);
