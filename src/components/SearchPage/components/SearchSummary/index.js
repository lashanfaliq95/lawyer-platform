import React, { memo } from 'react';
import { Spinner } from 'reactstrap';
import {
  number, shape, string, bool,
} from 'prop-types';
import formatMessages from 'components/formatMessages';
import messages from '../../messages';

const SearchSummary = ({
  numberOfResults, specialization, searchTerm, isSearchLoading,
}) => {
  const renderMessage = () => {
    if (searchTerm.nameOrFirm && searchTerm.location) {
      return formatMessages(messages.searchSummary,
        {
          numberOfResults,
          nameOrFirm: searchTerm.nameOrFirm,
          district: searchTerm.location,
        });
    }
    if (searchTerm.nameOrFirm) {
      return formatMessages(messages.searchSummaryWithNameOrFirm,
        {
          numberOfResults,
          nameOrFirm: searchTerm.nameOrFirm,
        });
    }
    if (searchTerm.location) {
      return formatMessages(messages.searchSummaryWithLocation,
        {
          numberOfResults,
          district: searchTerm.location,
        });
    }
    return formatMessages(messages.searchSummaryGeneric,
      {
        numberOfResults,
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
          <h1>
            {renderMessage()}
          </h1>
        </div>
      );
    }
    return (
      <div className="search-summary">
        <h1>
          {renderMessage()}
        </h1>
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
