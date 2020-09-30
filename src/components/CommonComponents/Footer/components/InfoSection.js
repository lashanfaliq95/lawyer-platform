import React from 'react';
import { Col, Row } from 'reactstrap';

import formatMessages from 'components/formatMessages';
import messages from '../messages';

const InfoSection = () => (
  <Row className="info-section">
    <Col md="3">
      <Row className="column-header">{formatMessages(messages.aboutAvoPlan)}</Row>
      <Row>{formatMessages(messages.aboutUs)}</Row>
      <Row>{formatMessages(messages.companies)}</Row>
      <Row>{formatMessages(messages.security)}</Row>
      <Row>{formatMessages(messages.career)}</Row>
      <Row>{formatMessages(messages.help)}</Row>
    </Col>
    <Col md="3">
      <Row className="column-header">{formatMessages(messages.aboutAvoPlan)}</Row>
      <Row>{formatMessages(messages.aboutUs)}</Row>
      <Row>{formatMessages(messages.companies)}</Row>
      <Row>{formatMessages(messages.security)}</Row>
      <Row>{formatMessages(messages.career)}</Row>
      <Row>{formatMessages(messages.help)}</Row>
    </Col>
    <Col md="3">
      <Row className="column-header">{formatMessages(messages.aboutAvoPlan)}</Row>
      <Row>{formatMessages(messages.aboutUs)}</Row>
      <Row>{formatMessages(messages.companies)}</Row>
      <Row>{formatMessages(messages.security)}</Row>
      <Row>{formatMessages(messages.career)}</Row>
      <Row>{formatMessages(messages.help)}</Row>
    </Col>
    <Col md="3">
      <Row className="column-header">{formatMessages(messages.aboutAvoPlan)}</Row>
      <Row>{formatMessages(messages.aboutUs)}</Row>
      <Row>{formatMessages(messages.companies)}</Row>
      <Row>{formatMessages(messages.security)}</Row>
      <Row>{formatMessages(messages.career)}</Row>
      <Row>{formatMessages(messages.help)}</Row>
    </Col>
  </Row>
);

export default InfoSection;
