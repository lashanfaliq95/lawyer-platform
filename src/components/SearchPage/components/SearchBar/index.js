import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  func, bool, arrayOf, string,
} from 'prop-types';
import {
  Input,
} from 'reactstrap';
import Autosuggest from 'react-autosuggest';

import { getSearchSuggestionsForNameOrFirm, getSearchSuggestionsForLocation, getSearchResult } from 'components/SearchPage/actions';

import './styles.scss';
import Icon from 'components/Shared/Icon';
import VL from 'components/Shared/VerticalSeparator';

const getSuggestionValue = (suggestion) => suggestion;
const renderSuggestion = (suggestion) => (
  <div>
    {suggestion}
  </div>
);

const SearchBar = ({
  getSearchSuggestionsForNameOrFirm: getSearchSuggestionsForNameOrFirmAction,
  getSearchSuggestionsForLocation: getSearchSuggestionsForLocationAction,
  getSearchResult: getSearchResultAction,
  shouldRedirectToSearch,
  nameOrFirmSuggestions,
}) => {
  const [searchTermForLocation, setSearchTermForLocation] = useState('');
  const [searchTermForNameOrFirm, setSearchTermForNameOrFirm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(nameOrFirmSuggestions);
  }, [nameOrFirmSuggestions]);

  const onNameOrFirmChange = (e) => {
    setSearchTermForNameOrFirm(e.target.value);
    if (e.target.value !== '') {
      getSearchSuggestionsForNameOrFirmAction(e.target.value);
    } else {
      setSuggestions([]);
    }
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
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={() => {}}
        onSuggestionsClearRequested={() => setSuggestions([])}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: 'Anwalt',
          value: searchTermForNameOrFirm,
          onChange: onNameOrFirmChange,
        }}
      />
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
  nameOrFirmSuggestions: arrayOf(string),
  shouldRedirectToSearch: bool,
};

SearchBar.defaultProps = {
  shouldRedirectToSearch: false,
  nameOrFirmSuggestions: [],
};

const mapStateToProps = (state) => ({
  nameOrFirmSuggestions: state.search.suggestions.nameOrFirm,
});

export default connect(
  mapStateToProps,
  {
    getSearchResult,
    getSearchSuggestionsForNameOrFirm,
    getSearchSuggestionsForLocation,
  },
)(SearchBar);
