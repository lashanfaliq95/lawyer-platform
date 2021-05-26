import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import './styles.scss';

import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import HorizontalSeparator from 'components/Shared/HorizontalSeparator';
import { bool } from 'prop-types';
import Search from './components/Search';
import CardSection from './components/CardSection';
import VideoSection from './components/VideoSection';
import ImageSection from './components/ImageSection';
import BottomCardSection from './components/BottomCardSection';

const HomePage = ({ isUserLoggedIn }) => (
  <>
    <NavigationBar />
    <Container className='home-page' fluid>
      <Search />
      <CardSection />
      {!isUserLoggedIn && (
        <>
          <VideoSection />
          <HorizontalSeparator
            color='#eef2f6'
            height={1}
            isContainer
            className='separator-wrapper'
          />
          <ImageSection />
          <HorizontalSeparator
            color='#eef2f6'
            height={1}
            isContainer
            className='separator-wrapper'
          />
          <BottomCardSection />
        </>
      )}
    </Container>
    {!isUserLoggedIn && <Footer />}
  </>
);

HomePage.propTypes = {
  isUserLoggedIn: bool.isRequired,
};

export default connect((state) => ({
  isUserLoggedIn: !!state.login.userDetails && state.login.userDetails.id,
}))(HomePage);
