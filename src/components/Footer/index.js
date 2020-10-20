import React from 'react';
import { bool, string } from 'prop-types';
import { Container } from 'reactstrap';

import './styles.scss';
import BottomFooter from './components/BottomFooter';
import InfoSection from './components/InfoSection';

const Footer = ({ hideInfoSection, className }) => (
  <Container className={`footer ${className}`} fluid>
    <Container>
      {!hideInfoSection && <InfoSection />}
      <BottomFooter />
    </Container>
  </Container>
);

Footer.propTypes = {
  hideInfoSection: bool,
  className: string,
};

Footer.defaultProps = {
  hideInfoSection: false,
  className: '',
};

export default Footer;
