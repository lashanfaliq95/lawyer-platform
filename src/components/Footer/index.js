import React from 'react';
import { Container } from 'reactstrap';

import './styles.scss';
import BottomFooter from './components/BottomFooter';
import InfoSection from './components/InfoSection';

const Footer = () => (
  <Container className="footer" fluid>
    <Container>
      <InfoSection />
      <BottomFooter />
    </Container>

  </Container>
);
export default Footer;
