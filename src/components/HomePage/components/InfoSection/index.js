import React from 'react';
import {
  Container, Row,
} from 'reactstrap';
import lawyerImage from 'assets/images/jusge.jpg';

import InfoComponent from './InfoComponent';

const InfoSection = () => (
  <Container className="info-section">
    <h3 className="info-title">Why make an appointment with AvoPlan?</h3>
    <Row>
      <InfoComponent img={lawyerImage} description="Access the availability of tens of thousands of healthcare professionals." />
      <InfoComponent img={lawyerImage} description="Access the availability of tens of thousands of healthcare professionals." />
    </Row>

  </Container>
);

export default InfoSection;
