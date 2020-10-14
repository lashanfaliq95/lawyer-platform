import React from 'react';
import { Container } from 'reactstrap';

import './styles.scss';
import NavigationBar from 'components/NavigationBar';

import Footer from 'components/Footer';
import Search from './components/Search';
import CardSection from './components/CardSection';
import VideoSection from './components/VideoSection';
import ImageSection from './components/ImageSection';

const HomePage = () => (
  <>
    <NavigationBar />
    <Container className="home-page" fluid>
      <Search />
      <CardSection />
      <VideoSection />
      <ImageSection />
    </Container>
    <Footer />
  </>
);

export default HomePage;
