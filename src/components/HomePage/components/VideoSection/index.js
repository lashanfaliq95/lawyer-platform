import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ReactPlayer from 'react-player/lazy';

import Card from 'components/Shared/CardComponent';
import demoVideo from 'assets/videos/demo.mp4';
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
      <Col className="player-wrapper" md="5">
        <ReactPlayer
          className="react-player"
          url={demoVideo}
          width="100%"
          height="100%"
          playing
          loop
        />
      </Col>
    </Row>
  </Container>
);

export default VideoSection;