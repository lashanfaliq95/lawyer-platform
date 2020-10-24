import React from 'react';
import { Container } from 'reactstrap';

import './styles.scss';
import NavigationBar from 'components/NavigationBar';

import Footer from 'components/Footer';
import HorizontalSeparator from 'components/Shared/HorizontalSeparator';
import Search from './components/Search';
import CardSection from './components/CardSection';
import VideoSection from './components/VideoSection';
import ImageSection from './components/ImageSection';
import BottomCardSection from './components/BottomCardSection';

const HomePage = () => (
  <>
    <NavigationBar />
    <Container className="home-page" fluid>
      <Search />
      <CardSection />
      <HorizontalSeparator
        color="#eef2f6"
        height={1}
        isContainer
        className="separator-wrapper"
      />
      <VideoSection />
      <HorizontalSeparator
        color="#eef2f6"
        height={1}
        isContainer
        className="separator-wrapper"
      />
      <ImageSection />
      <HorizontalSeparator
        color="#eef2f6"
        height={1}
        isContainer
        className="separator-wrapper"
      />
      <BottomCardSection />
    </Container>
    <Footer />
  </>
);

export default HomePage;
