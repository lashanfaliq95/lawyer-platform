import { get } from 'helpers/apiHelper';
import qs from 'qs';

export const getFilteredResultService = async ({
  activeFilters,
  nameOrFirm,
  location,
  page = 1,
}) => {
  const {
    activeLanguages,
    activeSpecializations,
    appointmentWithImmediateConfirmation,
  } = activeFilters;
  const languageQuery = qs.stringify(
    { languages: activeLanguages },
    { arrayFormat: 'comma', strictNullHandling: true },
  );
  const specializationQuery = qs.stringify(
    { specializations: activeSpecializations },
    { arrayFormat: 'comma', strictNullHandling: true },
  );
  const nameOrFirmQuery = qs.stringify({ nameOrFirm });
  const locationQuery = qs.stringify({ location });
  const pageQuery = qs.stringify({ page });
  const isAppointmentNotRequireApproval = qs.stringify({
    isAppointmentNotRequireApproval: appointmentWithImmediateConfirmation,
  });

  const query = `${nameOrFirm ? `${nameOrFirmQuery}&` : ''}${
    location ? `${locationQuery}&` : ''
  }${
    isAppointmentNotRequireApproval !== null
      ? `${isAppointmentNotRequireApproval}&`
      : ''
  }${activeLanguages.length > 0 ? `${languageQuery}&` : ''}${
    activeSpecializations.length > 0 ? `${specializationQuery}&` : ''
  }${pageQuery}`;
  const result = await get(`/search/lawyers?${query}`);
  return result;
};

export const getNameOrFirmSuggestions = async (nameOrFirm) => {
  const nameOrFirmQuery = qs.stringify({ nameOrFirm });
  const result = await get(`/search/suggestions?${nameOrFirmQuery}`);
  return result;
};

export const getLocationSuggestions = async (location) => {
  const locationQuery = qs.stringify({ location });
  const result = await get(`/search/suggestions?${locationQuery}`);
  return result;
};
