import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import './styles.scss';
import formatMessages from 'components/formatMessages';
import Icon from 'components/Shared/Icon';
import messages from './messages';

import AlphabeticalSearch from './AlphabeticalSearch';

const Footer = () => (
  <Container className="footer">
    <Row>
      <Col xs="3">
        <Row className="column-header">{formatMessages(messages.aboutAvoPlan)}</Row>
        <Row>{formatMessages(messages.aboutUs)}</Row>
        <Row>{formatMessages(messages.companies)}</Row>
        <Row>{formatMessages(messages.career)}</Row>
        <Row>{formatMessages(messages.help)}</Row>
      </Col>
      <Col xs="3" />
      <Col xs="3" />
      <Col xs="3" />
    </Row>
    <Row>
      <Icon name="facebook" color="blue" />
      <Icon name="facebook" color="blue" />
      <Icon name="facebook" color="blue" />
      <Icon name="facebook" color="blue" />
    </Row>
    <Row>
      <AlphabeticalSearch />
    </Row>
  </Container>
);
export default Footer;
