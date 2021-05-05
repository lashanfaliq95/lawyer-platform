import React, { memo } from 'react';
import { Spinner, Button } from 'reactstrap';
import { number, shape, string, bool, func } from 'prop-types';

import formatMessages from 'components/formatMessages';
import messages from '../../messages';

const SearchSummary = ({
  numberOfResults,
  specialization,
  isSearchLoading,
  clearFilters,
}) => {
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
    if (numberOfResults === 0) {
      return (
        <div className='search-summary'>
          <p>
            {formatMessages(messages.changeSearchOption)}
            <br />
            {formatMessages(messages.findMoreOptions, { specialization })}
          </p>
          <Button
            color='primary'
            className='clear-filter-button'
            onClick={clearFilters}
          >
            {formatMessages(messages.clearFilers)}
          </Button>
        </div>
      );
    }
    return null;
  };

  return renderSearchSummary();
};

SearchSummary.propTypes = {
  numberOfResults: number.isRequired,
  specialization: string.isRequired,
  searchTerm: shape({}).isRequired,
  isSearchLoading: bool.isRequired,
  clearFilters: func.isRequired,
};

export default memo(SearchSummary);
