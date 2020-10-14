import React from 'react';
import { Col, Row, Container } from 'reactstrap';

import Card from 'components/Shared/CardComponent';
import messages from '../../messages';

function CardSection() {
  return (
    <Container className="card-section">
      <h3 className="info-title">Why make an appointment with AvoPlan?</h3>
      <Row>
        <Col md="4"><Card iconName="search" title={messages.cardOneTitle} description={messages.cardOneDescription} /></Col>
        <Col md="4"><Card iconName="calendar-check" title={messages.cardTwoTitle} description={messages.cardTwoDescription} /></Col>
        <Col md="4"><Card iconName="bell" title={messages.cardThreeTitle} description={messages.cardThreeDescription} /></Col>
      </Row>
    </Container>
  );
}

export default CardSection;
