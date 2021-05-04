import React, { memo } from 'react';
import { Button } from 'reactstrap';
import { bool, shape, arrayOf, func } from 'prop-types';

import FilterButton from 'components/Shared/FilterButton';
import formatMessages from 'components/formatMessages';
import AvailabilityFilter from './AvailabilityFilter';
import SpecializationFilter from './SpecializationFilter';
import LanguageFilter from './LanguageFilter';
import FreeFirstAppointmentFilter from './FreeFirstAppointmentFilter';
import ImmediateConfirmationFilter from './ImmediateConfirmationFilter';

import messages from '../../messages';
import { specializationsFilters, languages } from '../../constants';

const FilterBar = ({
  activeFilters: {
    activeAvailability,
    activeSpecializations,
    freeFirstAppointment,
    appointmentWithImmediateConfirmation,
    activeLanguages,
  },
  clearFilters,
}) => (
  <div className='filter-bar'>
    <FilterButton
      name={messages.availabilityFilter}
      className='filter-modal'
      isFilterActive={activeAvailability && activeAvailability.length > 0}
    >
      <AvailabilityFilter
        isFilterActive={activeAvailability && activeAvailability.length > 0}
      />
    </FilterButton>
    <FilterButton
      name={messages.specializationFilter}
      className='filter-modal'
      isFilterActive={activeSpecializations && activeSpecializations.length > 0}
    >
      <SpecializationFilter
        specializations={specializationsFilters}
        activeSpecializations={activeSpecializations}
        isFilterActive={
          activeSpecializations && activeSpecializations.length > 0
        }
      />
    </FilterButton>
    <FilterButton
      name={messages.firstAppointmentFilter}
      className='filter-modal'
      isFilterActive={freeFirstAppointment}
    >
      <FreeFirstAppointmentFilter isFilterActive={freeFirstAppointment} />
    </FilterButton>
    <FilterButton
      name={messages.appointmentWithConfirmationFilter}
      className='filter-modal'
      isFilterActive={appointmentWithImmediateConfirmation}
    >
      <ImmediateConfirmationFilter
        isFilterActive={appointmentWithImmediateConfirmation}
      />
    </FilterButton>
    <FilterButton
      name={messages.languageFilter}
      className='filter-modal'
      isFilterActive={activeLanguages && activeLanguages.length > 0}
    >
      <LanguageFilter
        languages={languages}
        activeLanguages={activeLanguages}
        isFilterActive={activeLanguages && activeLanguages.length > 0}
      />
    </FilterButton>
    <Button
      color='primary'
      className='clear-filter-button'
      onClick={clearFilters}
    >
      {formatMessages(messages.clearFilers)}
    </Button>
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
  clearFilters: func.isRequired,
};

export default memo(FilterBar);
