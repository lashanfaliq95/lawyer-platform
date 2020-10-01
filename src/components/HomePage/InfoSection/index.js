import React from 'react';
import {
  Container, Row,
} from 'reactstrap';
import lawyerImage from 'assets/images/jusge.jpg';
import gavelImage from 'assets/images/law1.jpg';
import weightScaleImage from 'assets/images/law2.jpg';
import hitImage from 'assets/images/lawfirm.jpg';

import InfoComponent from './InfoComponent';

const InfoSection = () => (
  <Container className="info-section">
    <h3 className="info-title">Why make an appointment with AvoPlan?</h3>
    <Row>
      <InfoComponent img={lawyerImage} description="Access the availability of tens of thousands of healthcare professionals." />
      <InfoComponent img={gavelImage} description="Make an appointment online, 24/7 , for a physical or video consultation." />
      <InfoComponent img={weightScaleImage} description="Receive automatic reminders by text or email" />
      <InfoComponent img={hitImage} description="Find your appointment history and your medical documents ." />
    </Row>

  </Container>
);

export default InfoSection;
