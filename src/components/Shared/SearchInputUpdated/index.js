import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Input } from 'reactstrap';
import messages from 'components/HomePage/messages';
import formatMessages from 'components/formatMessages';

import './styles.scss';
import Icon from 'components/Shared/Icon';
import VL from 'components/Shared/VerticalSeparator';

import { specializations } from '../../SearchPage/constants';
import { getLocation } from '../utils';

const combinedSpecializations = [
  ...specializations.lawSpecializations,
  ...specializations.notarySpecializations,
];

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredSearchTerm, setFilteredSearchTerm] = useState(
    combinedSpecializations,
  );
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [isLocationPopupShown, setIsLocationPopupShown] = useState(false);

  const onSearchTermChange = (e) => {
    setIsPopupShown(true);
    setSearchTerm(e.target.value);
  };
  const onSearchLocationChange = (e) => {
    if (e.target.value === '') {
      setIsLocationPopupShown(true);
    }
    setSearchLocation(e.target.value);
  };

  const onClickLocationPopup = () => {
    getLocation((position) => position);
    setSearchLocation('Experten in der Umgebung entdecken');
    setIsLocationPopupShown(false);
  };

  useEffect(() => {
    if (!searchTerm) {
      setFilteredSearchTerm(combinedSpecializations);
    } else {
      const lawResults = filteredSearchTerm.filter((specialization) => specialization.specilization
        .toLowerCase()
        .includes(searchTerm.toLowerCase()));
      setFilteredSearchTerm(lawResults);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const renderFilteredSearchTerms = () => {
    const result = [];
    for (let i = 0; i < 9; i += 1) {
      if (filteredSearchTerm[i]) {
        result.push(
          <button
            className="element"
            key={filteredSearchTerm[i].id}
            value={filteredSearchTerm[i].specilization}
            onClick={() => {
              setSearchTerm(filteredSearchTerm[i].specilization);
              setIsPopupShown(false);
            }}
            onMouseDown={(e) => e.preventDefault()}
            type="button"
          >
            {filteredSearchTerm[i].specilization}
          </button>,
        );
      }
    }
    return result;
  };

  return (
    <Row className="search-input-updated">
      <Col className="first-search-input" md={{ size: 3 }}>
        <Input
          placeholder="z.B. Notar oder Herr Müller"
          value={searchTerm}
          onChange={onSearchTermChange}
          onFocus={() => setIsPopupShown(true)}
          onBlur={() => {
            setIsPopupShown(false);
          }}
          onKeyDown={(e) => {
            const key = e.keyCode || e.charCode;
            if (key === 8) {
              setFilteredSearchTerm(combinedSpecializations);
            }
          }}
        />
        <VL className="vertical-separator" />
        {isPopupShown && (
          <div className="custom-suggestions-popup">
            <div className="header">
              {formatMessages(messages.recommendedLegalAreas)}
            </div>
            <div className="content">{renderFilteredSearchTerms()}</div>
          </div>
        )}
      </Col>
      <Col className="second-search-input" md="3">
        <Input
          placeholder="z.B. Köln oder 50678"
          value={searchLocation}
          onChange={onSearchLocationChange}
          onFocus={(e) => {
            if (!e.target.value) {
              setIsLocationPopupShown(true);
            }
          }}
          onBlur={() => {
            setIsLocationPopupShown(false);
          }}
        />
        <div className="input-link">
          <Link to="/search">
            <div className="circular-icon">
              <Icon name="search" size="large" className="btn-icon" />
            </div>
          </Link>
        </div>
        {isLocationPopupShown && (
          <div className="custom-suggestions-popup location-popup">
            <button
              type="button"
              className="location"
              onMouseDown={(e) => e.preventDefault()}
              onClick={onClickLocationPopup}
            >
              <div className="popup-image" />
              <span>
                {formatMessages(messages.discoverExpertsNearby)}
              </span>
            </button>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default SearchInput;
