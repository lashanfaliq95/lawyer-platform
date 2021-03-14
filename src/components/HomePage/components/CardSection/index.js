import React from 'react';
import { Col, Row, Container } from 'reactstrap';

import Card from 'components/Shared/CardComponent';
import messages from '../../messages';

const CardSection = () => (
  <Container className="card-section" fluid>
    <div className="inner-section">
      <Row>
        <Col md="4">
          <Card
            iconName="search"
            title={messages.cardOneTitle}
            description={messages.cardOneDescription}
          />
        </Col>
        <Col md="4">
          <Card
            iconName="calendar-check"
            title={messages.cardTwoTitle}
            description={messages.cardTwoDescription}
          />
        </Col>
        <Col md="4">
          <Card
            iconName="bell"
            title={messages.cardThreeTitle}
            description={messages.cardThreeDescription}
          />
        </Col>
      </Row>
    </div>
  </Container>
);

export default CardSection;
