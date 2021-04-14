import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Card,
  Button,
  CardTitle,
  CardText,
  Col,
} from 'reactstrap';

import formatMessages from 'components/formatMessages';
import messages from '../messages';

const NoAppointmentCard = () => (
  <Row>
    <Col md="5">
      <Card body className="no-appointments-card">
        <CardTitle>{formatMessages(messages.getSupport)}</CardTitle>
        <CardText>{formatMessages(messages.findSuitableExpertTxt)}</CardText>
        <div className="no-appointment-card-btn">
          <Button color="primary">
            <Link to="/">
              {formatMessages(messages.findSuitableExpertBtn)}
            </Link>
          </Button>
        </div>
      </Card>
    </Col>
  </Row>
);

export default NoAppointmentCard;
