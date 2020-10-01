import React from 'react';
import { injectIntl } from 'react-intl';
import { Col, Row, Container } from 'reactstrap';
import { shape } from 'prop-types';

import Card from './Card';
import messages from '../messages';

function CardSection({ intl }) {
  return (
    <Container className="card-section">
      <Row>
        <Col md="4"><Card iconName="search" title={intl.formatMessage(messages.cardOneTitle)} description={intl.formatMessage(messages.cardOneDescription)} /></Col>
        <Col md="4"><Card iconName="calendar-check" title={intl.formatMessage(messages.cardTwoTitle)} description={intl.formatMessage(messages.cardTwoDescription)} /></Col>
        <Col md="4"><Card iconName="bell" title={intl.formatMessage(messages.cardThreeTitle)} description={intl.formatMessage(messages.cardThreeDescription)} /></Col>
      </Row>
    </Container>
  );
}

CardSection.propTypes = {
  intl: shape.isRequired,
};

export default injectIntl(CardSection);
