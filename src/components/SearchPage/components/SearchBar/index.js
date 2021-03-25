import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, string } from 'prop-types';
import Autosuggest from 'react-autosuggest';

import {
  getSearchSuggestionsForNameOrFirm,
  getSearchSuggestionsForLocation,
  getSearchResult,
} from 'components/SearchPage/actions';

import './styles.scss';
import Icon from 'components/Shared/Icon';
import VerticalSeparator from 'components/Shared/VerticalSeparator';
import { getLocation } from 'components/Shared/utils';
import formatMessages from 'components/formatMessages';
import messages from '../../messages';

const combinedSpecializations = [
  'Arbeitsrecht',
  'Steuerrecht',
  'Verkehrsrecht',
  'Mietrecht',
  'Familienrecht',
  'Strafrecht',
];

const initialLocationSuggestions = [
  'Köln',
  'Bonn',
  'Düsseldorf',
  'Berlin',
  'München',
  'Hamburg',
];

const getSuggestionValue = (suggestion) => suggestion;
const renderSuggestion = (suggestion) => (
  <div className="suggestion-list-element">
    <div className="popup-image" />
    <span>
      {suggestion}
    </span>

  </div>
);
const renderInputComponent = (inputProps) => (
  <div>
    <span className="search-input-label">
      {formatMessages(messages.expert)}
    </span>
    <input {...inputProps} className="first-search-input" />
  </div>
);
const renderSecondInputComponent = (inputProps) => (
  <div className="search-input-wrapper">
    <span className="search-input-label">
      {formatMessages(messages.location)}
    </span>
    <input {...inputProps} className="second-search-input" />
  </div>
);
const renderSuggestionsContainer = ({ containerProps, children }) => (
  <div {...containerProps} className="suggestions">
    {children}
  </div>
);

const SearchBar = ({
  getSearchSuggestionsForNameOrFirm: getSearchSuggestionsForNameOrFirmAction,
  getSearchSuggestionsForLocation: getSearchSuggestionsForLocationAction,
  getSearchResult: getSearchResultAction,
  nameOrFirmSuggestions,
  locationSuggestions: locationSuggestionsProp,
}) => {
  const [searchTermForLocation, setSearchTermForLocation] = useState('');
  const [searchTermForNameOrFirm, setSearchTermForNameOrFirm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [isLocationPopupShown, setIsLocationPopupShown] = useState(false);

  useEffect(() => {
    setSuggestions(nameOrFirmSuggestions);
  }, [nameOrFirmSuggestions]);

  useEffect(() => {
    setLocationSuggestions(locationSuggestionsProp);
  }, [locationSuggestionsProp]);

  const onNameOrFirmChange = (e) => {
    if (e.target.value !== '') {
      setIsPopupShown(false);
      getSearchSuggestionsForNameOrFirmAction(e.target.value);
    } else {
      setIsPopupShown(true);
    }
    setSearchTermForNameOrFirm(e.target.value);
  };

  const onLocationChange = (e) => {
    if (e.target.value === '') {
      setIsLocationPopupShown(true);
    } else {
      setIsLocationPopupShown(false);
      getSearchSuggestionsForLocationAction(e.target.value);
    }
    setSearchTermForLocation(e.target.value);
  };

  const onClickSearch = () => {
    getSearchResultAction({
      nameOrFirm: searchTermForNameOrFirm,
      location: searchTermForLocation,
    });
  };

  const onClickLocationPopup = () => {
    getLocation((position) => position);
    setSearchTermForLocation('Experten in der Umgebung entdecken');
    setIsLocationPopupShown(false);
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
          placeholder: 'z.B. Notar oder Frau Webder',
          value: searchTermForNameOrFirm,
          onChange: onNameOrFirmChange,
          onFocus: () => setIsPopupShown(true),
          onBlur: () => {
            setIsPopupShown(false);
          },
        }}
        renderInputComponent={renderInputComponent}
        renderSuggestionsContainer={renderSuggestionsContainer}
        onSuggestionSelected={(e, { suggestion }) => setSearchTermForNameOrFirm(suggestion)}
      />
      {isPopupShown && (
        <div className="custom-suggestions-popup">
          <div className="header">
            {formatMessages(messages.recommendedLegalAreas)}
          </div>
          <div className="content">
            {combinedSpecializations.map((specialization) => (
              <button
                className="element"
                key={specialization}
                value={specialization}
                onClick={() => {
                  setSearchTermForNameOrFirm(specialization);
                  setIsPopupShown(false);
                }}
                onMouseDown={(e) => e.preventDefault()}
                type="button"
              >
                {specialization}
              </button>
            ))}
          </div>
        </div>
      )}
      <VerticalSeparator className="vertical-separator" />
      <div style={{ position: 'relative' }}>
        <Autosuggest
          suggestions={locationSuggestions}
          onSuggestionsFetchRequested={() => {}}
          onSuggestionsClearRequested={() => setLocationSuggestions([])}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            placeholder: 'z.B. Köln oder 50678',
            value: searchTermForLocation,
            onChange: onLocationChange,
            onFocus: (e) => {
              if (!e.target.value) {
                setIsLocationPopupShown(true);
              }
            },
            onBlur: () => {
              setIsLocationPopupShown(false);
            },
          }}
          renderInputComponent={renderSecondInputComponent}
          renderSuggestionsContainer={renderSuggestionsContainer}
          onSuggestionSelected={(e, { suggestion }) => setSearchTermForLocation(suggestion)}
        />

        {isLocationPopupShown && (
        <div className="custom-suggestions-popup location-popup">
          <div className="header">
            <button
              type="button"
              className="location"
              onMouseDown={(e) => e.preventDefault()}
              onClick={onClickLocationPopup}
            >
              <div className="popup-image" />
              <span>{formatMessages(messages.expertsNearby)}</span>
            </button>
          </div>
          <div className="header">{formatMessages(messages.suggestion)}</div>
          <div className="content">
            {initialLocationSuggestions.map((location) => (
              <button
                className="element"
                key={location}
                value={location}
                onClick={() => {
                  setSearchTermForLocation(location);
                  setIsLocationPopupShown(false);
                }}
                onMouseDown={(e) => e.preventDefault()}
                type="button"
              >
                {location}
              </button>
            ))}
          </div>
        </div>
        )}
      </div>
      <div className="search-icon">
        <Icon name="search" onClick={onClickSearch} size="large" />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  getSearchSuggestionsForNameOrFirm: func.isRequired,
  getSearchSuggestionsForLocation: func.isRequired,
  getSearchResult: func.isRequired,
  nameOrFirmSuggestions: arrayOf(string),
  locationSuggestions: arrayOf(string),
};

SearchBar.defaultProps = {
  nameOrFirmSuggestions: [],
  locationSuggestions: [],
};

const mapStateToProps = (state) => ({
  nameOrFirmSuggestions: state.search.suggestions.nameOrFirm,
  locationSuggestions: state.search.suggestions.location,
});

export default connect(mapStateToProps, {
  getSearchResult,
  getSearchSuggestionsForNameOrFirm,
  getSearchSuggestionsForLocation,
})(SearchBar);
