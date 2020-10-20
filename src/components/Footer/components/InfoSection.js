import React from 'react';
import { Col, Row } from 'reactstrap';

import formatMessages from 'components/formatMessages';
import Icon from 'components/Shared/Icon';
import messages from '../messages';

const InfoSection = () => (
  <Row className="info-section">
    <Col md="3">
      <Row className="first-column-header">
        {formatMessages(messages.aboutAvoPlan)}
      </Row>
      <Row>
        <Icon name="question-circle" />
        <span className="icon-text">{formatMessages(messages.helpCenter)}</span>
      </Row>
    </Col>
    <Col md={{ size: 3, offset: 3 }}>
      <Row className="column-header">{formatMessages(messages.company)}</Row>
      <Row>{formatMessages(messages.aboutUs)}</Row>
      <Row>{formatMessages(messages.ourPrinciples)}</Row>
      <Row>{formatMessages(messages.career)}</Row>
    </Col>
    <Col md="3">
      <Row className="column-header">
        {formatMessages(messages.otherOptions)}
      </Row>
      <Row>{formatMessages(messages.bookAppointment)}</Row>
      <Row>{formatMessages(messages.registerAsAClient)}</Row>
      <Row>{formatMessages(messages.AdvoplanPro)}</Row>
    </Col>
  </Row>
);

export default InfoSection;
