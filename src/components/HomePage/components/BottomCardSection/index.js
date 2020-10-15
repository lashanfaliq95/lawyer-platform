import React from 'react';
import { Col, Row, Container } from 'reactstrap';

import ImageCard from 'components/Shared/ImageCardComponent';
import germanFlag from 'assets/images/germanFlag.jpg';
import tuv from 'assets/images/tuv.png';
import lock from 'assets/images/lock.svg';
import formatMessages from 'components/formatMessages';
import messages from '../../messages';

const BottomCardSection = () => (
  <Container className="bottom-card-section">
    <h2 className="title">{formatMessages(messages.bottomCardSectionTitle)}</h2>
    <Row>
      <Col md="4">
        <ImageCard
          img={germanFlag}
          title={messages.bottomCardSectionCardOneTitle}
          description={messages.bottomCardSectionCardOneDescription}
          btnText={messages.bottomCardSectionCardOneBtnText}
          onClick={() => {}}
        />
      </Col>
      <Col md="4">
        <ImageCard
          img={tuv}
          title={messages.bottomCardSectionCardTwoTitle}
          description={messages.bottomCardSectionCardTwoDescription}
          btnText={messages.bottomCardSectionCardTwoBtnText}
          onClick={() => {}}
        />
      </Col>
      <Col md="4">
        <ImageCard
          img={lock}
          title={messages.bottomCardSectionCardThreeTitle}
          description={messages.bottomCardSectionCardThreeDescription}
          btnText={messages.bottomCardSectionCardThreeBtnText}
          onClick={() => {}}
        />
      </Col>
    </Row>
  </Container>
);

export default BottomCardSection;
