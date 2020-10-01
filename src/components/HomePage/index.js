import React from 'react';
import { Container } from 'reactstrap';

import './styles.scss';
import Search from './Search';
import InfoSection from './InfoSection';
import CardSection from './CardSection';

const HomePage = () => (
  <Container className="home-page" fluid>
    <Search />
    <InfoSection />
    <CardSection />
  </Container>
);

export default HomePage;
