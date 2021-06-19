import React, { memo } from 'react';
import { Spinner } from 'reactstrap';
import { number, shape, string, bool } from 'prop-types';
import formatMessages from 'components/formatMessages';
import messages from '../../messages';
import { MALE, CITY_OF_COLOGNE } from '../../constants';

const SearchResults = ({
  numberOfResults,
  searchTerm,
  isSearchLoading,
  users,
}) => {
  const renderMessage = () => {
    if (users.length === 1) {
      if (users[0].gender === MALE) {
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
        <div className='search-summary'>
          <Spinner type='grow' color='primary' />
          <Spinner type='grow' color='primary' />
          <Spinner type='grow' color='primary' />
          <Spinner type='grow' color='primary' />
          <Spinner type='grow' color='primary' />
        </div>
      );
    }

    if (numberOfResults > 0) {
      return (
        <div className='search-summary'>
          <h1>{renderMessage()}</h1>
        </div>
      );
    }
    return (
      <div className='search-summary'>
        <h1>{renderMessage()}</h1>
      </div>
    );
  };

  return renderSearchSummary();
};

SearchResults.propTypes = {
  numberOfResults: number.isRequired,
  specialization: string.isRequired,
  searchTerm: shape({}).isRequired,
  isSearchLoading: bool.isRequired,
};

export default memo(SearchResults);
