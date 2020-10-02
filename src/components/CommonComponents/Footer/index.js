import React from 'react';
import { Container } from 'reactstrap';

import './styles.scss';
import HorizontalSeparator from 'components/Shared/HorizontalSeparator';
import AlphabeticalSearch from './components/AlphabeticalSearch';
import BottomFooter from './components/BottomFooter';
import IconBar from './components/IconBar';
import InfoSection from './components/InfoSection';

const Footer = () => (
  <Container className="themed-container footer" fluid="xl">
    <HorizontalSeparator color="#eef2f6" height={1} />
    <BottomFooter />
    <InfoSection />
    <IconBar />
    <AlphabeticalSearch />
  </Container>
);
export default Footer;
