import React from 'react';
import {
  Card, CardText, CardBody, Col,
  CardTitle, Button, Row,
} from 'reactstrap';

import lawyerImage from 'assets/images/jusge.jpg';

const ProfileCard = () => (
  <Card className="profile-card">
    <CardBody>
      <Row>
        <Col md="5">
          <Row>
            <Col md="4">
              <img className="info-image" src={lawyerImage} alt="Info images" />
            </Col>
            <Col md={{ size: 7, offset: 1 }}>
              <CardTitle>

                <Button className="name-btn" color="link">Name name</Button>
                <span className="job-description">
                  normal lawyer
                </span>

              </CardTitle>
              <CardText className="address">

                4 Rue de Malpartida de Caceres
                85190 Aizenay

              </CardText>
              <span className="agreement-type">
                Sector 1
              </span>
            </Col>
          </Row>
          <Row className="make-appointment-btn-row">
            <Button>Button</Button>
          </Row>

        </Col>
        <Col md="7">
          Calender : TODO

        </Col>
      </Row>

    </CardBody>
  </Card>
);

export default ProfileCard;
