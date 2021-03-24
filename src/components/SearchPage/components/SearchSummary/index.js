import React, { memo } from 'react';
import { Spinner } from 'reactstrap';
import {
  number, shape, string, bool,
} from 'prop-types';
import formatMessages from 'components/formatMessages';
import messages from '../../messages';
import { MALE, CITY_OF_COLOGNE } from '../../constants';

const SearchSummary = ({
  numberOfResults,
  specialization,
  searchTerm,
  isSearchLoading,
  gender,
}) => {
  const renderMessage = () => {
    if (numberOfResults === 1) {
      if (gender === MALE) {
        return formatMessages(messages.searchSummaryWithOneMale, {
          location: searchTerm.location || CITY_OF_COLOGNE,
        });
      }
      return formatMessages(messages.searchSummaryWithOneFemale, {
        location: searchTerm.location,
      });
    }
    if (numberOfResults < 100) {
      return formatMessages(messages.SearchSummary, {
        location: searchTerm.location || CITY_OF_COLOGNE,
        numberOfResults,
      });
    }

    return formatMessages(messages.SearchSummaryWithMoreResults, {
      location: searchTerm.location || CITY_OF_COLOGNE,
    });
  };

  const renderSearchSummary = () => {
    if (isSearchLoading) {
      return (
        <div className="search-summary">
          <Spinner type="grow" color="primary" />
          <Spinner type="grow" color="primary" />
          <Spinner type="grow" color="primary" />
          <Spinner type="grow" color="primary" />
          <Spinner type="grow" color="primary" />
        </div>
      );
    }

    if (numberOfResults > 0) {
      return (
        <div className="search-summary">
          <h1>{renderMessage()}</h1>
        </div>
      );
    }
    return (
      <div className="search-summary">
        <h1>{renderMessage()}</h1>
        <p>
          {formatMessages(messages.changeSearchOption)}
          <br />
          {formatMessages(messages.findMoreOptions, { specialization })}
        </p>
      </div>
    );
  };

  return renderSearchSummary();
};

SearchSummary.propTypes = {
  numberOfResults: number.isRequired,
  specialization: string.isRequired,
  searchTerm: shape({}).isRequired,
  isSearchLoading: bool.isRequired,
};

export default memo(SearchSummary);
