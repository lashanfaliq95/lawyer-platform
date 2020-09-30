import React from 'react';
import { Container } from 'reactstrap';

import './styles.scss';
import Search from './Search';
import InfoSection from './InfoSection';

const HomePage = () => (
  <Container className="home-page" fluid>
    <Search />
    <InfoSection />
  </Container>
);

export default HomePage;
