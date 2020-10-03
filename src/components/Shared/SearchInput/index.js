import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Col, Button,
} from 'reactstrap';
import { number } from 'prop-types';

import InputWithIcon from 'components/Shared/InputWithIcon';
import formatMessages from 'components/formatMessages';
import messages from 'components/HomePage/messages';

const SearchInput = ({ sizeInputOne, sizeInputTwo, offset }) => (
  <Row>
    <Col className="first-search-input" md={{ size: `${sizeInputOne}`, offset: `${offset}` }}>
      <InputWithIcon name="search" color="grey" placeholder="z.B. Notar oder Herr Müller" />
    </Col>
    <Col className="second-search-input" md={`${sizeInputTwo}`}>
      <InputWithIcon name="map-marker-alt" color="grey" placeholder="z.B. Köln oder 50678" />
    </Col>
    <Col md={`${12 - offset - sizeInputOne - sizeInputTwo}`}>
      <Link to="/search">
        <Button color="warning">{formatMessages(messages.search)}</Button>
      </Link>
    </Col>
  </Row>
);

SearchInput.propTypes = {
  sizeInputOne: number,
  sizeInputTwo: number,
  offset: number,
};

SearchInput.defaultProps = {
  sizeInputOne: 3,
  sizeInputTwo: 3,
  offset: 1,
};

export default SearchInput;
