import React from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { func, string } from 'prop-types';
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
  id,
  name,
  jobDescription,
  address,
  onMouseEnterCard: onMouseEnterCardAction,
  onMouseLeaveCard: onMouseLeaveCardAction,
}) => (
  <Element name={`profile-card-${id}`}>
    <Card
      className="profile-card"
      onMouseEnter={() => {
        onMouseEnterCardAction({ id });
      }}
      onMouseLeave={() => {
        onMouseLeaveCardAction({ id });
      }}
    >
      <CardBody>
        <Row>
          <Col md="5">
            <Row>
              <Col md="4">
                <img
                  className="info-image"
                  src={lawyerImage}
                  alt="Info images"
                />
              </Col>
              <Col md={{ size: 7, offset: 1 }}>
                <CardTitle>
                  <Button className="name-btn" color="link">
                    {name}
                  </Button>
                  <span className="job-description">{jobDescription}</span>
                </CardTitle>
                <CardText className="address">{address}</CardText>
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
  </Element>
);

ProfileCard.propTypes = {
  onMouseEnterCard: func.isRequired,
  onMouseLeaveCard: func.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  jobDescription: string.isRequired,
  address: string.isRequired,
};

export default connect(null, { onMouseEnterCard, onMouseLeaveCard })(
  ProfileCard,
);
