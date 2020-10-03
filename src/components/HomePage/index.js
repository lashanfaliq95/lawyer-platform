import React from 'react';
import { Container } from 'reactstrap';

import './styles.scss';
import NavigationBar from 'components/CommonComponents/NavigationBar';

import Footer from 'components/CommonComponents/Footer';
import Search from './Search';
import CardSection from './CardSection';

const HomePage = () => (
  <>
    <NavigationBar />
    <Container className="home-page" fluid>
      <Search />
      <CardSection />
    </Container>
    <Footer />
  </>
);

export default HomePage;
