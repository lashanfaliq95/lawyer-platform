import { defineMessages } from 'react-intl';

export default defineMessages({
  searchSummary: {
    id: 'app.searchPage.searchSummary',
    defaultMessage: '{numberOfResults} {specialization} in {district}',
  },
  searchSummaryNotFound: {
    id: 'app.searchPage.searchSummaryNotFound',
    defaultMessage: '0 found {specialization} in {district}',
  },
  changeSearchOption: {
    id: 'app.searchPage.changeSearchOption',
    defaultMessage: 'change the search options',
  },
  findMoreOptions: {
    id: 'app.searchPage.findMoreOptions',
    defaultMessage: 'Find more {specialization} by changing the search options',
  },
  availabilityFilter: {
    id: 'app.searchPage.availabilityFilter',
    defaultMessage: 'Availability',
  },
  specializationFilter: {
    id: 'app.searchPage.specializationFilter',
    defaultMessage: 'Specializations',
  },
  firstAppointmentFilter: {
    id: 'app.searchPage.firstAppointmentFilter',
    defaultMessage: 'Free First Appointment',
  },
  appointmentWithConfirmationFilter: {
    id: 'app.searchPage.appointmentWithConfirmationFilter',
    defaultMessage: 'Appointment With immediate confirmation',
  },
  languageFilter: {
    id: 'app.searchPage.languageFilter',
    defaultMessage: 'Language',
  },
});
