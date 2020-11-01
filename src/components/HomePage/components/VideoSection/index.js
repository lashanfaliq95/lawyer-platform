import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import Card from 'components/Shared/CardComponent';
import messages from '../../messages';

const VideoSection = () => (
  <Container className="video-section">
    <Row>
      <Col className="video-card-section" md="6">
        <Card
          title={messages.videoSectionCardTitle}
          description={messages.videoSectionCardDescription}
          btnText={messages.videoSectionBtnText}
          btnClass="blue-btn"
          isTitleBold
        />
      </Col>
      <Col md="5">
        <div className="video-image" />
      </Col>
    </Row>
  </Container>
);

export default VideoSection;
