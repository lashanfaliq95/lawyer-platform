import React, { memo } from 'react';
import { number, string } from 'prop-types';

const SearchSummary = ({ numberOfResults, specialization, district }) => (
  numberOfResults > 0
    ? (
      <div className="search-summary">
        <h1>
          {`${numberOfResults} ${specialization} in ${district}`}
        </h1>
      </div>
    )
    : (
      <div className="search-summary">
        <h1>
          {`0 found ${specialization} in ${district}`}
        </h1>
        <p>
          change the search options
          <br />
          {`Find more ${specialization} by changing the search options`}
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
