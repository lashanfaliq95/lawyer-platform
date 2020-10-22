import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import {
  Card,
  CardText,
  CardBody,
  Col,
  CardTitle,
  Button,
  Row,
} from 'reactstrap';

import lawyerImage from 'assets/images/jusge.jpg';
import { onMouseEnterCard, onMouseLeaveCard } from '../../actions';

const ProfileCard = ({
  onMouseEnterCard: onMouseEnterCardAction,
  onMouseLeaveCard: onMouseLeaveCardAction,
}) => (
  <Card
    className="profile-card"
    onMouseEnter={() => {
      onMouseEnterCardAction({ id: 1 });
    }}
    onMouseLeave={() => {
      onMouseLeaveCardAction({ id: 1 });
    }}
  >
    <CardBody>
      <Row>
        <Col md="5">
          <Row>
            <Col md="4">
              <img className="info-image" src={lawyerImage} alt="Info images" />
            </Col>
            <Col md={{ size: 7, offset: 1 }}>
              <CardTitle>
                <Button className="name-btn" color="link">
                  Name name
                </Button>
                <span className="job-description">normal lawyer</span>
              </CardTitle>
              <CardText className="address">
                Salzgitter, Lower Saxony, Germany
              </CardText>
              <span className="agreement-type">Sector 1</span>
            </Col>
          </Row>
          <Row className="make-appointment-btn-row">
            <Button>Button</Button>
          </Row>
        </Col>
        <Col md="7">Calender : TODO</Col>
      </Row>
    </CardBody>
  </Card>
);

ProfileCard.propTypes = {
  onMouseEnterCard: func.isRequired,
  onMouseLeaveCard: func.isRequired,
};

export default connect(null, { onMouseEnterCard, onMouseLeaveCard })(
  ProfileCard,
);
