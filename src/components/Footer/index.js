import React from 'react';
import { bool, string } from 'prop-types';
import { Container } from 'reactstrap';

import './styles.scss';
import BottomFooter from './components/BottomFooter';
import InfoSection from './components/InfoSection';

const Footer = ({ hideInfoSection, className, isUserLoggedIn }) => {
  const classNameWhenUserLoggedIn = isUserLoggedIn ? 'no-margin' : '';
  return (
    <Container className={`footer ${classNameWhenUserLoggedIn} ${className}`} fluid>
      <Container>
        {!hideInfoSection && <InfoSection />}
        <BottomFooter />
      </Container>
    </Container>
  );
};

Footer.propTypes = {
  hideInfoSection: bool,
  className: string,
  isUserLoggedIn: bool,
};

Footer.defaultProps = {
  hideInfoSection: false,
  isUserLoggedIn: false,
  className: '',
};

export default Footer;
