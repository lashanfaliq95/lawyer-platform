import { get } from 'helpers/apiHelper';
import qs from 'qs';

export const getFiltersService = async () => {
  const result = await get('/search/filters');
  return result;
};

export const getFilteredResultService = async ({
  activeFilters,
  nameOrFirm,
  location,
}) => {
  const { activeLanguages, activeSpecializations } = activeFilters;
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

  const query = `${nameOrFirm ? `${nameOrFirmQuery}&` : ''}${
    location ? `${locationQuery}&` : ''
  }${activeLanguages.length > 0 ? `${languageQuery}&` : ''}${
    activeSpecializations.length > 0 ? `${specializationQuery}` : ''
  }`;
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
