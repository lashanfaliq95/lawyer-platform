import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Col, Button,
} from 'reactstrap';
import { number } from 'prop-types';

import InputWithIcon from 'components/Shared/InputWithIcon';
import formatMessages from 'components/formatMessages';
import messages from 'components/HomePage/messages';

import { getLocation } from '../utils';

const SearchInput = ({ sizeInputOne, sizeInputTwo, offset }) => (
  <Row>
    <Col className="first-search-input" md={{ size: `${sizeInputOne}`, offset: `${offset}` }}>
      <InputWithIcon prependIcon={{ name: 'search', color: 'grey' }} placeholder="z.B. Notar oder Herr Müller" />
    </Col>
    <Col className="second-search-input" md={`${sizeInputTwo}`}>
      <InputWithIcon prependIcon={{ name: 'map-marker-alt', color: 'grey' }} appendIcon={{ name: 'compass', color: 'grey', onClick: () => { getLocation((position) => { console.log(position.coords.latitude, position.coords.longitude); }); } }} placeholder="z.B. Köln oder 50678" />
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
