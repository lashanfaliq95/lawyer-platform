import React, { memo } from 'react';
import { number, string } from 'prop-types';
import formatMessages from 'components/formatMessages';
import messages from '../../messages';

const SearchSummary = ({ numberOfResults, specialization, district }) => (
  numberOfResults > 0
    ? (
      <div className="search-summary">
        <h1>
          {formatMessages(messages.searchSummary, { numberOfResults, specialization, district })}
        </h1>
      </div>
    )
    : (
      <div className="search-summary">
        <h1>
          {formatMessages(messages.searchSummaryNotFound, { specialization, district })}
        </h1>
        <p>
          {formatMessages(messages.changeSearchOption)}
          <br />
          {formatMessages(messages.findMoreOptions, { specialization })}
        </p>
      </div>
    )
);

SearchSummary.propTypes = {
  numberOfResults: number.isRequired,
  specialization: string.isRequired,
  district: string.isRequired,
};

export default memo(SearchSummary);
