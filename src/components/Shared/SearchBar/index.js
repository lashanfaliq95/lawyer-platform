import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import {
  Input,
} from 'reactstrap';

import { getSearchSuggestionsForNameOrFirm, getSearchSuggestionsForLocation, getSearchResult } from 'components/SearchPage/actions';

import './styles.scss';
import Icon from 'components/Shared/Icon';
import VL from 'components/Shared/VerticalSeparator';

const SearchBar = ({
  getSearchSuggestionsForNameOrFirm: getSearchSuggestionsForNameOrFirmAction,
  getSearchSuggestionsForLocation: getSearchSuggestionsForLocationAction,
  getSearchResult: getSearchResultAction,
  shouldRedirectToSearch,
}) => {
  const [searchTermForLocation, setSearchTermForLocation] = useState('');
  const [searchTermForNameOrFirm, setSearchTermForNameOrFirm] = useState('');

  const onNameOrFirmChange = (e) => {
    setSearchTermForNameOrFirm(e.target.value);
    getSearchSuggestionsForNameOrFirmAction(e.target.value);
  };

  const onLocationChange = (e) => {
    setSearchTermForLocation(e.target.value);
    getSearchSuggestionsForLocationAction(e.target.value);
  };

  const onClickSearch = () => {
    getSearchResultAction({ nameOrFirm: searchTermForNameOrFirm, location: searchTermForLocation });
  };

  return (
    <div className="nav-search">
      <Input placeholder="Anwalt" value={searchTermForNameOrFirm} onChange={onNameOrFirmChange} />
      <VL color="rgb(221, 221, 221)" />
      <Input placeholder="Koln" value={searchTermForLocation} onChange={onLocationChange} />
      {
        shouldRedirectToSearch ? (
          <Link to={{
            pathname: '/search',
            state: {
              searchTermForNameOrFirm,
              searchTermForLocation,
            },
          }}
          >
            <Icon name="search" className="search-icon" onClick={() => {}} />
          </Link>
        ) : <Icon name="search" className="search-icon" onClick={onClickSearch} />
      }

    </div>
  );
};

SearchBar.propTypes = {
  getSearchSuggestionsForNameOrFirm: func.isRequired,
  getSearchSuggestionsForLocation: func.isRequired,
  getSearchResult: func.isRequired,
  shouldRedirectToSearch: bool,
};

SearchBar.defaultProps = {
  shouldRedirectToSearch: false,
};

export default connect(
  null,
  {
    getSearchResult,
    getSearchSuggestionsForNameOrFirm,
    getSearchSuggestionsForLocation,
  },
)(SearchBar);