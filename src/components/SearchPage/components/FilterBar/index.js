import React, { memo } from 'react';
import { bool, shape, arrayOf } from 'prop-types';

import FilterButton from 'components/Shared/FilterButton';
import AvailabilityFilter from './AvailabilityFilter';
import SpecializationFilter from './SpecializationFilter';
import FreeFirstAppointmentFilter from './FreeFirstAppointmentFilter';
import ImmediateConfirmationFilter from './ImmediateConfirmationFilter';

import messages from '../../messages';
import { specializations } from '../../constants';

const FilterBar = ({
  activeFilters: {
    activeAvailability,
    activeSpecializations,
    freeFirstAppointment,
    appointmentWithImmediateConfirmation,
  },
}) => (
  <div className="filter-bar">
    <FilterButton
      name={messages.availabilityFilter}
      className="filter-modal"
      isFilterActive={activeAvailability && activeAvailability.length > 0}
    >
      <AvailabilityFilter
        isFilterActive={activeAvailability && activeAvailability.length > 0}
      />
    </FilterButton>
    <FilterButton
      name={messages.specializationFilter}
      className="filter-modal"
      isFilterActive={activeAvailability && activeSpecializations.length > 0}
    >
      <SpecializationFilter
        {...specializations}
        isFilterActive={activeAvailability && activeSpecializations.length > 0}
      />
    </FilterButton>
    <FilterButton
      name={messages.firstAppointmentFilter}
      className="filter-modal"
      isFilterActive={freeFirstAppointment}
    >
      <FreeFirstAppointmentFilter isFilterActive={freeFirstAppointment} />
    </FilterButton>
    <FilterButton
      name={messages.appointmentWithConfirmationFilter}
      className="filter-modal"
      isFilterActive={appointmentWithImmediateConfirmation}
    >
      <ImmediateConfirmationFilter
        isFilterActive={appointmentWithImmediateConfirmation}
      />
    </FilterButton>
  </div>
);

FilterBar.propTypes = {
  activeFilters: shape({
    activeAvailability: arrayOf(shape({})).isRequired,
    activeSpecializations: arrayOf(shape({})).isRequired,
    freeFirstAppointment: bool.isRequired,
    appointmentWithImmediateConfirmation: bool.isRequired,
    activeLanguages: arrayOf(shape({})).isRequired,
  }).isRequired,
};

export default memo(FilterBar);
