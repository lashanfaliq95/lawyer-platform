import React from 'react';
import { Col, Row } from 'reactstrap';

import Icon from 'components/Shared/Icon';
import formatMessages from 'components/formatMessages';
import messages from '../messages';

const BottomFooter = () => (
  <Row className="bottom-footer">
    <Col md="4">
      <Icon name="copyright" />
      <span>
        {` ${new Date().getFullYear()}`}
    &nbsp;
        {formatMessages(messages.brand)}
      </span>
    </Col>
    <Col md={{ size: '1', offset: 4 }}>{formatMessages(messages.imprint)}</Col>
    <Col md="1">{formatMessages(messages.privacyPolicy)}</Col>
    <Col md="1">{formatMessages(messages.terms)}</Col>
  </Row>
);
export default BottomFooter;
