import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import Card from 'components/Shared/CardComponent';
import image from 'assets/images/imageSection.png';
import messages from '../../messages';

const ImageSection = () => (
  <Container className="image-section">
    <Row>
      <Col className="image-card-section" md={{ size: 6, offset: 1 }}>
        <Card
          title={messages.imageSectionCardTitle}
          description={messages.imageSectionCardDescription}
          btnText={messages.imageSectionBtnText}
          btnClass="blue-btn-outline"
          btnOutline
        />
      </Col>
      <Col className="image-wrapper" md={{ size: 4, offset: 1 }}>
        <img src={image} alt="test" />
      </Col>
    </Row>
    <Row className="image-card-section">
      <Col md="4">
        <Card
          iconName="money-bill-alt"
          title={messages.imageSectionCardOneTitle}
          description={messages.imageSectionCardOneDescription}
        />
      </Col>
      <Col md="4">
        <Card
          iconName="clock"
          title={messages.imageSectionCardTwoTitle}
          description={messages.imageSectionCardTwoDescription}
        />
      </Col>
      <Col md="4">
        <Card
          iconName="star"
          title={messages.imageSectionCardThreeTitle}
          description={messages.imageSectionCardThreeDescription}
        />
      </Col>
    </Row>
  </Container>
);

export default ImageSection;
