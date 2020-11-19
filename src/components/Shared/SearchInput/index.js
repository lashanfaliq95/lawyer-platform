import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { shape, bool } from 'prop-types';

import InputWithIcon from 'components/Shared/InputWithIcon';
import formatMessages from 'components/formatMessages';
import messages from 'components/HomePage/messages';
import './styles.scss';
import Icon from 'components/Shared/Icon';
import VL from 'components/Shared/VerticalSeparator';

import { getLocation } from '../utils';

const SearchInput = ({
  transitionText,
  showGetLocationIcon,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onSearchLocationChange = (e) => {
    setSearchLocation(e.target.value);
  };

  return (
    <Row className="search-input">
      <Col className="first-search-input" md={{ size: 3 }}>
        <InputWithIcon
          prependImgIcon
          placeholder="z.B. Notar oder Herr Müller"
          value={searchTerm}
          onChange={onSearchTermChange}
        />
        <VL className="vertical-separator" />
      </Col>
      <Col className="second-search-input" md="3">
        <InputWithIcon
          prependIcon={{ name: 'map-marker-alt', color: 'grey' }}
          appendIcon={
            showGetLocationIcon
              ? {
                name: 'crosshairs',
                color: 'grey',
                onClick: () => {
                  getLocation((position) => {
                    console.log(position);
                  });
                },
              }
              : null
          }
          placeholder="z.B. Köln oder 50678"
          transitionText={transitionText}
          value={searchLocation}
          onChange={onSearchLocationChange}
        />
      </Col>
      <Col
        className="first-search-button"
        md="2"
      >
        <Link to="/search">
          <Button className="search-input-btn">
            <Icon name="search" size="large" className="btn-icon" />
            {formatMessages(messages.search)}
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

SearchInput.propTypes = {
  transitionText: shape(),
  showGetLocationIcon: bool,
};

SearchInput.defaultProps = {
  transitionText: null,
  showGetLocationIcon: true,
};

export default SearchInput;
