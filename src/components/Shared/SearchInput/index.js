import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { number, string, shape } from 'prop-types';

import InputWithIcon from 'components/Shared/InputWithIcon';
import formatMessages from 'components/formatMessages';
import messages from 'components/HomePage/messages';
import './styles.scss';
import Icon from 'components/Shared/Icon';

import { getLocation } from '../utils';

const SearchInput = ({
  sizeInputOne,
  sizeInputTwo,
  offset,
  className,
  transitionText,
}) => (
  <Row>
    <Col
      className="first-search-input"
      md={{ size: `${sizeInputOne}`, offset: `${offset}` }}
    >
      <InputWithIcon
        prependIcon={{ name: 'search', color: 'grey' }}
        placeholder="z.B. Notar oder Herr Müller"
      />
    </Col>
    <Col className="second-search-input" md={`${sizeInputTwo}`}>
      <InputWithIcon
        prependIcon={{ name: 'map-marker-alt', color: 'grey' }}
        appendIcon={{
          name: 'crosshairs',
          color: 'grey',
          onClick: () => {
            getLocation((position) => { console.log(position); });
          },
        }}
        placeholder="z.B. Köln oder 50678"
        transitionText={transitionText}
      />
    </Col>
    <Col
      className={className}
      md={`${12 - offset - sizeInputOne - sizeInputTwo}`}
    >
      <Link to="/search">
        <Button className="search-input-btn">
          {formatMessages(messages.search)}
          <Icon name="angle-right" size="large" className="btn-icon" />
        </Button>
      </Link>
    </Col>
  </Row>
);

SearchInput.propTypes = {
  sizeInputOne: number,
  sizeInputTwo: number,
  offset: number,
  className: string,
  transitionText: shape(),
};

SearchInput.defaultProps = {
  sizeInputOne: 3,
  sizeInputTwo: 3,
  offset: 1,
  className: '',
  transitionText: null,
};

export default SearchInput;
